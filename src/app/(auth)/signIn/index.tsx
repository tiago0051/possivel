import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, router } from "expo-router";

export default function SignIn() {
  return (
    <View style={{ ...style.Container }}>
      <Stack.Screen options={{ title: " ", headerShadowVisible: false }} />
      <View style={style.ContainerMain}>
        <View>
          <Text style={style.Titulo}>Bem-vindo!</Text>
          <Text style={style.Texto}>Entre para continuar</Text>
        </View>
        <View style={style.ContainerForm}>
          <TextInput style={style.Input} placeholder="000.000.000-00" />
          <TextInput style={style.Input} placeholder="Senha" />
          <View style={style.ContainerButtons}>
            <Pressable
              style={style.ButtonEntrar}
              onPress={() => router.push("/dashboard/home")}
            >
              <Text style={style.ButtonEntrarText}>Entrar</Text>
            </Pressable>
            <Pressable onPress={() => router.push("forgotPassword")}>
              <Text style={style.ButtonRecuperarText}>Esqueceu a senha?</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  ContainerMain: {
    padding: "10%",
    height: "90%",
    justifyContent: "center",
    gap: 80,
  },
  ContainerForm: {
    gap: 50,
  },
  ContainerButtons: {
    gap: 16,
  },
  Titulo: {
    fontSize: 36,
    fontWeight: "600",
  },
  Texto: {
    fontSize: 18,
  },
  Input: {
    borderBottomColor: "#00000039",
    borderBottomWidth: 2,
    fontSize: 22,
    paddingBottom: 10,
  },
  ButtonEntrar: {
    backgroundColor: "#f3ec08",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  ButtonEntrarText: {
    fontSize: 18,
  },
  ButtonRecuperarText: {
    fontSize: 16,
    textAlign: "center",
    color: "#3752ff",
  },
});
