import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, router } from "expo-router";
import Toast from "react-native-toast-message";

export default function Register() {
  function handleSubmit() {
    Toast.show({
      type: "success",
      text1: "Cadastrar",
      text2: "Usuário cadastrado com sucesso",
    });
  }
  return (
    <View style={{ ...style.Container }}>
      <Stack.Screen options={{ headerShadowVisible: false, title: " " }} />
      <View style={style.ContainerMain}>
        <View>
          <Text style={style.Titulo}>Olá!</Text>
          <Text style={style.Texto}>Cadastre-se para continuar</Text>
        </View>
        <View style={style.ContainerForm}>
          <TextInput style={style.Input} placeholder="Nome" />
          <TextInput style={style.Input} placeholder="000.000.000-00" />
          <TextInput style={style.Input} placeholder="Senha" />
          <TextInput style={style.Input} placeholder="Confirmar senha" />
          <View style={style.ContainerButtons}>
            <Pressable
              style={style.ButtonEntrar}
              onPress={() => handleSubmit()}
            >
              <Text style={style.ButtonEntrarText}>Cadastrar</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/signIn")}>
              <Text style={style.ButtonRecuperarText}>Já possui conta?</Text>
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
    gap: 40,
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
    borderRadius: 4,
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
