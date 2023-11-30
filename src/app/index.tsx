import {
  Button,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link, Stack, router } from "expo-router";

import image from "./assets/manAndBooks.jpg";
import logo from "./assets/logo.jpg";
import { useState } from "react";

export default function SignIn() {
  const [layoutHight, setLayoutHight] = useState(0);
  const screenHight = Dimensions.get("window").height;

  const Wrapper = layoutHight > screenHight ? ScrollView : View;

  return (
    <Wrapper>
      <Stack.Screen options={{ headerShown: false }} />

      <View
        style={style.container}
        onLayout={({ nativeEvent }) =>
          setLayoutHight(nativeEvent.layout.height)
        }
      >
        <View style={style.containerHeader}>
          <Image source={logo} style={style.logo} />
        </View>
        <View style={style.containerMain}>
          <View style={style.containerImage}>
            <Image source={image} style={style.image} />
          </View>
          <View style={style.containerForm}>
            <Text style={style.titulo}>Olá, seja bem-vindo</Text>
            <Text style={style.texto}>
              O curso @possível se mobiliza para que você (aluno) possa ter o
              seu certificado, com qualidade, acompanhamento educacional, com
              ousadia e paciência.
            </Text>
            <Pressable
              style={style.buttonEntrar}
              onPress={() => router.push("/signIn")}
            >
              <Text style={style.buttonEntrarText}>Entrar</Text>
            </Pressable>
            <Pressable
              style={style.buttonCadastrar}
              onPress={() => router.push("/register")}
            >
              <Text style={style.buttonCadastrarText}>Cadastrar-se</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingBottom: 40,
  },
  containerHeader: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerMain: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: "5%",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: "cover",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    color: "#11100a",
  },
  texto: {
    fontSize: 18,
    color: "#11100ac6",
  },
  buttonEntrar: {
    backgroundColor: "#f3ec08",
    borderRadius: 8,
    padding: 10,
    width: 300,
    marginTop: 16,
    alignItems: "center",
  },
  buttonEntrarText: {
    textAlign: "center",
    fontSize: 20,
    color: "#11100a",
  },
  buttonCadastrar: {},
  buttonCadastrarText: {
    color: "#3752ff",
    fontSize: 16,
  },
});
