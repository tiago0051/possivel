import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import {
  BellCountNotificationsText,
  ContainerBell,
  ContainerBellCountNotifications,
} from "./style";

export default function Forum() {
  return (
    <View style={style.Container}>
      <Tabs.Screen
        options={{
          title: "Forum",
          headerTitle: " ",
          headerShadowVisible: false,
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name={"forum"}
              size={size}
              color={focused ? "#3752ff" : "#11100ac6"}
            />
          ),
        }}
      />
      <View style={style.ContainerHeader}>
        <Text style={style.HeaderTitle}>Suas comunidades</Text>
      </View>
      <View style={style.ContainerCommunities}>
        {new Array(5).fill({}).map((v, index) => (
          <View key={index} style={style.ContainerCommunity}>
            <View style={style.ContainerCommunityHeader}>
              <Text style={style.CommunityHeaderTitle}>AV1 Matemática 1</Text>
              <ContainerBell>
                <Icon name="notifications" size={24} />
                <ContainerBellCountNotifications>
                  <BellCountNotificationsText>2</BellCountNotificationsText>
                </ContainerBellCountNotifications>
              </ContainerBell>
            </View>
            <View>
              <Text style={style.CommunityBodyDescription}>
                Grupo para atualizações e explicações da matéria Matemática 1
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    backgroundColor: "#ffff",
    flex: 1,
    alignItems: "center",
    gap: 30,
  },
  ContainerHeader: {
    width: "90%",
  },
  HeaderTitle: {
    fontSize: 30,
    fontWeight: "600",
  },
  ContainerCommunities: {
    width: "90%",
    gap: 16,
  },
  ContainerCommunity: {
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOpacity: 0.2,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginRight: "2%",
    marginLeft: "2%",
    gap: 4,
  },
  ContainerCommunityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  CommunityHeaderTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
  CommunityBodyDescription: {
    fontSize: 18,
  },
});
