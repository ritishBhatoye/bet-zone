# Betting Zone App - Color System Guide

## Overview
This guide explains the comprehensive color system designed specifically for the Betting Zone app. The colors are organized by purpose and include both light and dark mode variants.

## Color Categories

### 1. Primary Colors (Brand Colors)
**Usage**: Main brand colors, primary buttons, navigation, key UI elements

```tsx
// Examples
<View className="bg-primary-500" /> // Main primary background
<Text className="text-primary-600" /> // Primary text
<View className="border-primary-400" /> // Primary border
```

**Available shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **500**: Main primary color (#0ea5e9)
- **400**: Lighter variant for hover states
- **600**: Darker variant for pressed states

### 2. Secondary Colors (Golden/Yellow)
**Usage**: Highlights, secondary actions, promotional elements

```tsx
// Examples
<View className="bg-secondary-golden-500" /> // Main secondary background
<Text className="text-secondary-golden-600" /> // Secondary text
```

**Available shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **500**: Main secondary color (#f59e0b)

### 3. Tertiary Colors (Yellow)
**Usage**: Warnings, alerts, tertiary actions

```tsx
// Examples
<View className="bg-tertiary-yellow-500" /> // Warning background
<Text className="text-tertiary-yellow-600" /> // Warning text
```

### 4. Betting-Specific Colors

#### Success Colors (Wins/Profits)
**Usage**: Winning bets, positive outcomes, profit indicators

```tsx
// Examples
<View className="bg-betting-success-500" /> // Win indicator
<Text className="text-betting-success-600" /> // Profit text
```

#### Danger Colors (Losses/Risks)
**Usage**: Losing bets, negative outcomes, risk indicators

```tsx
// Examples
<View className="bg-betting-danger-500" /> // Loss indicator
<Text className="text-betting-danger-600" /> // Loss text
```

#### Live Colors
**Usage**: Live match indicators, real-time features

```tsx
// Examples
<View className="bg-betting-live-500" /> // Live indicator
<Text className="text-betting-live-600" /> // Live text
```

#### Odds Colors
**Usage**: Different odds levels, probability indicators

```tsx
// Examples
<View className="bg-betting-odds-high" /> // High odds
<View className="bg-betting-odds-medium" /> // Medium odds
<View className="bg-betting-odds-low" /> // Low odds
```

#### Bet Types Colors
**Usage**: Different types of bets

```tsx
// Examples
<View className="bg-betting-betTypes-single" /> // Single bet
<View className="bg-betting-betTypes-multiple" /> // Multiple bet
<View className="bg-betting-betTypes-system" /> // System bet
```

### 5. Status Colors
**Usage**: User status, online/offline indicators

```tsx
// Examples
<View className="bg-status-online" /> // Online status
<View className="bg-status-offline" /> // Offline status
<View className="bg-status-away" /> // Away status
<View className="bg-status-busy" /> // Busy status
```

### 6. Card Colors
**Usage**: Card backgrounds, content containers

```tsx
// Examples
<View className="bg-card-primary" /> // Main card background
<View className="bg-card-secondary" /> // Secondary card background
<View className="bg-card-accent" /> // Accent card background
```

### 7. Border Colors
**Usage**: Borders, dividers, separators

```tsx
// Examples
<View className="border-border-light" /> // Light border
<View className="border-border-medium" /> // Medium border
<View className="border-border-dark" /> // Dark border
<View className="border-border-primary" /> // Primary border
```

### 8. Legacy Swiggy Colors
**Usage**: Existing components that use Swiggy color scheme

```tsx
// Examples
<View className="bg-swiggy-primary" /> // Swiggy primary
<View className="bg-swiggy-accent-light" /> // Swiggy accent
<Text className="text-swiggy-text" /> // Swiggy text
```

## Usage Examples by Component Type

### Buttons
```tsx
// Primary button
<TouchableOpacity className="bg-primary-500 rounded-xl px-4 py-3">
  <Text className="text-white font-montserrat-semibold">Place Bet</Text>
</TouchableOpacity>

// Secondary button
<TouchableOpacity className="bg-secondary-golden-500 rounded-xl px-4 py-3">
  <Text className="text-white font-montserrat-semibold">View Odds</Text>
</TouchableOpacity>

// Danger button
<TouchableOpacity className="bg-betting-danger-500 rounded-xl px-4 py-3">
  <Text className="text-white font-montserrat-semibold">Cancel Bet</Text>
</TouchableOpacity>
```

### Cards
```tsx
// Match card
<View className="bg-card-primary rounded-xl p-4 shadow-lg">
  <Text className="text-gray-800 font-avalar-bold">Team A vs Team B</Text>
  <View className="bg-betting-live-500 px-2 py-1 rounded-full self-start mt-2">
    <Text className="text-white text-xs font-montserrat-bold">LIVE</Text>
  </View>
</View>
```

### Status Indicators
```tsx
// Win indicator
<View className="bg-betting-success-500 px-3 py-1 rounded-full">
  <Text className="text-white font-montserrat-bold">+₹500</Text>
</View>

// Loss indicator
<View className="bg-betting-danger-500 px-3 py-1 rounded-full">
  <Text className="text-white font-montserrat-bold">-₹200</Text>
</View>
```

### Input Fields
```tsx
// Primary input
<View className="bg-white border border-border-light rounded-lg p-3">
  <TextInput className="text-gray-800 font-montserrat" />
</View>

// Error input
<View className="bg-white border border-betting-danger-500 rounded-lg p-3">
  <TextInput className="text-gray-800 font-montserrat" />
</View>
```

## Dark Mode Support

All colors automatically adapt to dark mode. The system uses:
- Lighter variants of colors in dark mode for better contrast
- Adjusted background colors for dark themes
- Maintained accessibility standards

## Accessibility

The color system is designed with accessibility in mind:
- Sufficient contrast ratios for text readability
- Color-blind friendly combinations
- Clear visual hierarchy

## Best Practices

1. **Consistency**: Use the same color for the same purpose throughout the app
2. **Hierarchy**: Use primary colors for main actions, secondary for supporting actions
3. **Feedback**: Use success/danger colors for clear user feedback
4. **Context**: Use betting-specific colors for betting-related features
5. **Accessibility**: Always ensure sufficient contrast between text and background

## Migration Guide

If you're updating existing components:

1. Replace generic colors with semantic ones:
   - `bg-red-500` → `bg-betting-danger-500`
   - `bg-green-500` → `bg-betting-success-500`
   - `bg-blue-500` → `bg-primary-500`

2. Use the new color system for new components
3. Maintain consistency across similar UI elements 