import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Social = () => {
  const friends = [
    {
      id: 1,
      name: "Rahul Sharma",
      avatar: "https://via.placeholder.com/50",
      status: "Online",
      winRate: "72%",
      totalWins: 156,
      isOnline: true,
    },
    {
      id: 2,
      name: "Priya Patel",
      avatar: "https://via.placeholder.com/50",
      status: "Last seen 2h ago",
      winRate: "68%",
      totalWins: 142,
      isOnline: false,
    },
    {
      id: 3,
      name: "Amit Kumar",
      avatar: "https://via.placeholder.com/50",
      status: "Online",
      winRate: "75%",
      totalWins: 203,
      isOnline: true,
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      name: "BetMaster Pro",
      wins: 245,
      winRate: "78%",
      avatar: "https://via.placeholder.com/40",
    },
    {
      rank: 2,
      name: "Lucky Striker",
      wins: 198,
      winRate: "72%",
      avatar: "https://via.placeholder.com/40",
    },
    {
      rank: 3,
      name: "Goal Hunter",
      wins: 176,
      winRate: "69%",
      avatar: "https://via.placeholder.com/40",
    },
    {
      rank: 4,
      name: "You",
      wins: 156,
      winRate: "68%",
      avatar: "https://via.placeholder.com/40",
    },
    {
      rank: 5,
      name: "Sports Guru",
      wins: 134,
      winRate: "65%",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  const achievements = [
    {
      id: 1,
      name: "First Win",
      description: "Win your first bet",
      icon: "trophy",
      color: "#FFD700",
      unlocked: true,
    },
    {
      id: 2,
      name: "Streak Master",
      description: "Win 5 bets in a row",
      icon: "flame",
      color: "#FF6B35",
      unlocked: true,
    },
    {
      id: 3,
      name: "High Roller",
      description: "Place a bet of ₹10,000+",
      icon: "diamond",
      color: "#9C27B0",
      unlocked: false,
    },
    {
      id: 4,
      name: "Social Butterfly",
      description: "Add 10 friends",
      icon: "people",
      color: "#4CAF50",
      unlocked: true,
    },
  ];

  const socialBets = [
    {
      id: 1,
      creator: "Rahul Sharma",
      match: "Manchester United vs Liverpool",
      pick: "Over 2.5 Goals",
      participants: 24,
      totalPool: "₹12,000",
      timeLeft: "2h 30m",
      isFollowing: true,
    },
    {
      id: 2,
      creator: "Priya Patel",
      match: "Arsenal vs Chelsea",
      pick: "Arsenal Win",
      participants: 18,
      totalPool: "₹8,500",
      timeLeft: "1h 45m",
      isFollowing: false,
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "transparent" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ padding: 16 }}>
        {/* Social Stats */}
        <View
          style={{
            backgroundColor: "#1a1a1a",
            borderRadius: 16,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Social Stats
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{ alignItems: "center", marginBottom: 16, width: "48%" }}
            >
              <Text style={{ color: "#888", fontSize: 14 }}>Friends</Text>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                24
              </Text>
            </View>
            <View
              style={{ alignItems: "center", marginBottom: 16, width: "48%" }}
            >
              <Text style={{ color: "#888", fontSize: 14 }}>Followers</Text>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                156
              </Text>
            </View>
            <View
              style={{ alignItems: "center", marginBottom: 16, width: "48%" }}
            >
              <Text style={{ color: "#888", fontSize: 14 }}>Following</Text>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                89
              </Text>
            </View>
            <View
              style={{ alignItems: "center", marginBottom: 16, width: "48%" }}
            >
              <Text style={{ color: "#888", fontSize: 14 }}>Achievements</Text>
              <Text
                style={{ color: "#FFD700", fontSize: 24, fontWeight: "bold" }}
              >
                12
              </Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#4CAF50",
              padding: 12,
              borderRadius: 12,
              flex: 1,
              marginRight: 8,
              alignItems: "center",
            }}
          >
            <Ionicons name="add-circle-outline" size={20} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 12, marginTop: 4 }}>
              Add Friends
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#2196F3",
              padding: 12,
              borderRadius: 12,
              flex: 1,
              marginLeft: 8,
              alignItems: "center",
            }}
          >
            <Ionicons name="people-outline" size={20} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 12, marginTop: 4 }}>
              Create Bet
            </Text>
          </TouchableOpacity>
        </View>

        {/* Friends Online */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Friends Online
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#2196F3", fontSize: 14 }}>View All</Text>
            </TouchableOpacity>
          </View>

          {friends.map((friend) => (
            <View
              key={friend.id}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ position: "relative", marginRight: 12 }}>
                <Image
                  source={{ uri: friend.avatar }}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: friend.isOnline ? "#4CAF50" : "#888",
                    borderWidth: 2,
                    borderColor: "#1a1a1a",
                  }}
                />
              </View>

              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 4,
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
                  >
                    {friend.name}
                  </Text>
                  <Text
                    style={{
                      color: "#4CAF50",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {friend.winRate}
                  </Text>
                </View>

                <Text style={{ color: "#888", fontSize: 12, marginBottom: 4 }}>
                  {friend.status}
                </Text>

                <Text style={{ color: "#888", fontSize: 12 }}>
                  {friend.totalWins} total wins
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#2196F3",
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}
                >
                  Challenge
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Leaderboard */}
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Weekly Leaderboard
          </Text>
          <View
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: 16,
              padding: 16,
            }}
          >
            {leaderboard.map((player, index) => (
              <View
                key={player.rank}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 12,
                  borderBottomWidth: index < leaderboard.length - 1 ? 1 : 0,
                  borderBottomColor: "#333",
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: player.rank <= 3 ? "#FFD700" : "#333",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Text
                    style={{
                      color: player.rank <= 3 ? "#000" : "#fff",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {player.rank}
                  </Text>
                </View>

                <Image
                  source={{ uri: player.avatar }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 12,
                  }}
                />

                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: player.name === "You" ? "#4CAF50" : "#fff",
                      fontSize: 16,
                      fontWeight: player.name === "You" ? "bold" : "normal",
                    }}
                  >
                    {player.name}
                  </Text>
                  <Text style={{ color: "#888", fontSize: 12 }}>
                    {player.wins} wins • {player.winRate} win rate
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Achievements */}
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Achievements
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {achievements.map((achievement) => (
              <View
                key={achievement.id}
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  width: "48%",
                  marginBottom: 12,
                  alignItems: "center",
                  opacity: achievement.unlocked ? 1 : 0.5,
                }}
              >
                <Ionicons
                  name={achievement.icon as any}
                  size={32}
                  color={achievement.unlocked ? achievement.color : "#888"}
                />
                <Text
                  style={{
                    color: achievement.unlocked ? "#fff" : "#888",
                    fontSize: 14,
                    fontWeight: "bold",
                    marginTop: 8,
                    textAlign: "center",
                  }}
                >
                  {achievement.name}
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontSize: 12,
                    textAlign: "center",
                    marginTop: 4,
                  }}
                >
                  {achievement.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Social Bets */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Social Bets
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#2196F3", fontSize: 14 }}>View All</Text>
            </TouchableOpacity>
          </View>

          {socialBets.map((bet) => (
            <View
              key={bet.id}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
                >
                  {bet.creator}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: bet.isFollowing ? "#4CAF50" : "#333",
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}
                  >
                    {bet.isFollowing ? "Following" : "Follow"}
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>
                {bet.match}
              </Text>

              <Text
                style={{
                  color: "#FF9800",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 8,
                }}
              >
                Pick: {bet.pick}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="people" size={16} color="#888" />
                  <Text style={{ color: "#888", fontSize: 12, marginLeft: 4 }}>
                    {bet.participants} participants
                  </Text>
                </View>
                <Text
                  style={{ color: "#4CAF50", fontSize: 14, fontWeight: "bold" }}
                >
                  {bet.totalPool}
                </Text>
                <Text style={{ color: "#FF9800", fontSize: 12 }}>
                  {bet.timeLeft}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Community Features */}
        <View
          style={{
            backgroundColor: "#1a1a1a",
            borderRadius: 16,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Community Features
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#333",
                borderRadius: 12,
                padding: 16,
                width: "48%",
                marginBottom: 12,
                alignItems: "center",
              }}
            >
              <Ionicons name="chatbubbles" size={24} color="#2196F3" />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Forums
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#333",
                borderRadius: 12,
                padding: 16,
                width: "48%",
                marginBottom: 12,
                alignItems: "center",
              }}
            >
              <Ionicons name="calendar" size={24} color="#4CAF50" />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Events
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#333",
                borderRadius: 12,
                padding: 16,
                width: "48%",
                marginBottom: 12,
                alignItems: "center",
              }}
            >
              <Ionicons name="trophy" size={24} color="#FFD700" />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Tournaments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#333",
                borderRadius: 12,
                padding: 16,
                width: "48%",
                marginBottom: 12,
                alignItems: "center",
              }}
            >
              <Ionicons name="school" size={24} color="#9C27B0" />
              <Text
                style={{
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Tips
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Social;
