import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

export default function Biblioteca() {
  return (
    <View style={style.Container}>
      <Tabs.Screen
        options={{
          title: "Biblioteca",
          headerTitle: " ",
          headerShadowVisible: false,
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name={"book"}
              size={size}
              color={focused ? "#3752ff" : "#11100ac6"}
            />
          ),
        }}
      />
      <View style={style.ContainerHeader}>
        <Text style={style.HeaderTitle}>Matérias disponíveis</Text>
      </View>
      <View style={style.ContainerBooks}>
        {new Array(5).fill({}).map((v, index) => (
          <View key={index} style={style.ContainerBook}>
            <View style={style.ContainerBookHeader}>
              <Text style={style.BookTitle}>Português</Text>
              <Icon
                name={"book"}
                size={20}
                color={"#11100ac6"}
                style={style.BookIcon}
              />
            </View>
            <Text style={style.BookTeacherName}>Jorge Leão da Silva</Text>
            <Text>Sala A10 as 18:00</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    gap: 30,
  },
  ContainerHeader: {
    width: "90%",
  },
  ContainerBooks: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "90%",
    justifyContent: "space-between",
    rowGap: 16,
  },
  ContainerBook: {
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
  ContainerBookHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  HeaderTitle: {
    fontSize: 30,
    fontWeight: "600",
    marginLeft: "2%",
  },
  BookIcon: {
    alignSelf: "flex-end",
  },
  BookTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  BookTeacherName: {
    fontSize: 16,
  },
});
