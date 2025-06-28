import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Wallet = () => {
  const walletData = {
    balance: "₹25,450",
    bonus: "₹1,200",
    totalDeposited: "₹50,000",
    totalWithdrawn: "₹15,000",
    pendingWithdrawals: "₹2,500",
  };

  const transactions = [
    {
      id: 1,
      type: "Deposit",
      amount: "+₹5,000",
      method: "UPI",
      status: "Completed",
      date: "Today, 2:30 PM",
      icon: "arrow-down",
      color: "#4CAF50",
    },
    {
      id: 2,
      type: "Bet Placed",
      amount: "-₹500",
      method: "Betting",
      status: "Active",
      date: "Today, 1:45 PM",
      icon: "football",
      color: "#FF9800",
    },
    {
      id: 3,
      type: "Withdrawal",
      amount: "-₹2,000",
      method: "Bank Transfer",
      status: "Processing",
      date: "Yesterday, 4:20 PM",
      icon: "arrow-up",
      color: "#2196F3",
    },
    {
      id: 4,
      type: "Bonus",
      amount: "+₹200",
      method: "Welcome Bonus",
      status: "Completed",
      date: "2 days ago",
      icon: "gift",
      color: "#9C27B0",
    },
  ];

  const paymentMethods = [
    { id: 1, name: "UPI", icon: "phone-portrait-outline", color: "#4CAF50" },
    { id: 2, name: "Net Banking", icon: "business", color: "#2196F3" },
    { id: 3, name: "Credit Card", icon: "card", color: "#FF9800" },
    { id: 4, name: "Paytm", icon: "wallet", color: "#00BCD4" },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "transparent" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ padding: 16 }}>
        {/* Balance Overview */}
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
            Wallet Balance
          </Text>
          <Text
            style={{
              color: "#4CAF50",
              fontSize: 32,
              fontWeight: "bold",
              marginBottom: 8,
            }}
          >
            {walletData.balance}
          </Text>
          <Text style={{ color: "#888", fontSize: 14, marginBottom: 16 }}>
            Available for betting
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ color: "#888", fontSize: 14 }}>Bonus Balance</Text>
            <Text
              style={{ color: "#FF9800", fontSize: 14, fontWeight: "bold" }}
            >
              {walletData.bonus}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ color: "#888", fontSize: 14 }}>Total Deposited</Text>
            <Text style={{ color: "#fff", fontSize: 14 }}>
              {walletData.totalDeposited}
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#888", fontSize: 14 }}>Total Withdrawn</Text>
            <Text style={{ color: "#fff", fontSize: 14 }}>
              {walletData.totalWithdrawn}
            </Text>
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
              padding: 16,
              borderRadius: 12,
              flex: 1,
              marginRight: 8,
              alignItems: "center",
            }}
          >
            <Ionicons name="add-circle-outline" size={24} color="#fff" />
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 8,
              }}
            >
              Deposit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#2196F3",
              padding: 16,
              borderRadius: 12,
              flex: 1,
              marginLeft: 8,
              alignItems: "center",
            }}
          >
            <Ionicons name="arrow-up-circle-outline" size={24} color="#fff" />
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 8,
              }}
            >
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>

        {/* Payment Methods */}
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Payment Methods
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                style={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  width: "48%",
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <Ionicons name={method.icon} size={24} color={method.color} />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                    marginTop: 8,
                  }}
                >
                  {method.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Betting Limits */}
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
            Betting Limits
          </Text>
          <View style={{ marginBottom: 12 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "#888", fontSize: 14 }}>Min Bet</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>₹10</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "#888", fontSize: 14 }}>Max Bet</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>₹50,000</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#888", fontSize: 14 }}>Daily Limit</Text>
              <Text style={{ color: "#fff", fontSize: 14 }}>₹1,00,000</Text>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
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
              Recent Transactions
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#2196F3", fontSize: 14 }}>View All</Text>
            </TouchableOpacity>
          </View>

          {transactions.map((transaction) => (
            <View
              key={transaction.id}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: transaction.color + "20",
                  borderRadius: 8,
                  padding: 8,
                  marginRight: 12,
                }}
              >
                <Ionicons
                  name={transaction.icon}
                  size={20}
                  color={transaction.color}
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
                    {transaction.type}
                  </Text>
                  <Text
                    style={{
                      color: transaction.amount.startsWith("+")
                        ? "#4CAF50"
                        : "#f44336",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {transaction.amount}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#888", fontSize: 12 }}>
                    {transaction.method}
                  </Text>
                  <View
                    style={{
                      backgroundColor:
                        transaction.status === "Completed"
                          ? "#4CAF50"
                          : transaction.status === "Processing"
                            ? "#FF9800"
                            : "#2196F3",
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {transaction.status}
                    </Text>
                  </View>
                </View>

                <Text style={{ color: "#888", fontSize: 12, marginTop: 4 }}>
                  {transaction.date}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Security & Verification */}
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
            Security & Verification
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={{ color: "#fff", fontSize: 14, marginLeft: 8 }}>
                Email Verified
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#888" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={{ color: "#fff", fontSize: 14, marginLeft: 8 }}>
                Phone Verified
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#888" />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="close-circle" size={20} color="#f44336" />
              <Text style={{ color: "#888", fontSize: 14, marginLeft: 8 }}>
                KYC Pending
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={{ color: "#2196F3", fontSize: 14 }}>Complete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Wallet;
