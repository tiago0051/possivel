import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function SignIn() {
  function handleSubmit() {
    Toast.show({
      type: "success",
      text1: "Recuperar senha",
      text2: "Foi enviado para o e-mail um link de recuperação e senha!",
    });
  }

  return (
    <View style={{ ...style.Container }}>
      <Stack.Screen options={{ title: " ", headerShadowVisible: false }} />
      <View style={style.ContainerMain}>
        <View>
          <Text style={style.Titulo}>Esqueceu a senha?</Text>
          <Text style={style.Texto}>
            Podemos te ajudar! Dígite seu CPF para localizarmos seu cadastro
          </Text>
        </View>
        <View style={style.ContainerForm}>
          <TextInput style={style.Input} placeholder="000.000.000-00" />
          <View style={style.ContainerButtons}>
            <Pressable
              style={style.ButtonEntrar}
              onPress={() => handleSubmit()}
            >
              <Text style={style.ButtonEntrarText}>Recuperar</Text>
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
});
