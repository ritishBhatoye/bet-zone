import { API_CONFIG, getApiUrl, SportType } from "./config";
import { ApiError, ApiResponse } from "./types";

class ApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  constructor(sport: SportType = "football") {
    this.baseUrl = getApiUrl(sport);
    this.headers = { ...API_CONFIG.HEADERS };
  }

  setSport(sport: SportType) {
    this.baseUrl = getApiUrl(sport);
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const cacheKey = `${url}${JSON.stringify(options)}`;

    // Check cache first
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }

    try {
      const response = await fetch(url, {
        headers: this.headers,
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse<T> = await response.json();

      // Check for API errors
      if (data.errors && data.errors.length > 0) {
        throw new Error(`API errors: ${data.errors.join(", ")}`);
      }

      // Cache the response
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now(),
      });

      return data;
    } catch (error) {
      const apiError: ApiError = {
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
        code: error instanceof Response ? error.status : undefined,
        details: error,
      };
      throw apiError;
    }
  }

  // Generic GET request
  async get<T>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    const queryString = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    return this.makeRequest<T>(`${endpoint}${queryString}`);
  }

  // Generic POST request
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // Clear cache
  clearCache(): void {
    this.cache.clear();
  }

  // Clear specific cache entry
  clearCacheEntry(pattern: string): void {
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
      }
    }
  }
}

// Create singleton instance
const apiClient = new ApiClient();

export default apiClient;
export { ApiClient };
