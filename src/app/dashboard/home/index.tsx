import { Tabs } from "expo-router";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import {
  AlertBodyText,
  AlertTitle,
  AlertsHeaderText,
  Container,
  ContainerAlert,
  ContainerAlertBody,
  ContainerAlertHeader,
  ContainerAlerts,
  ContainerAlertsHeader,
  ContainerAlertsMain,
  ContainerImage,
  ContainerMain,
  MainImage,
  TitleText,
} from "./style";

import image from "./assets/7119040_3286568.jpg";

export default function Home() {
  return (
    <Container>
      <Tabs.Screen
        options={{
          title: "Início",
          headerTitle: " ",
          headerShadowVisible: false,
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name={"home"}
              size={size}
              color={focused ? "#3752ff" : "#11100ac6"}
            />
          ),
        }}
      />
      <View>
        <TitleText>Seja bem-vindo Roberto</TitleText>
      </View>
      <ContainerMain>
        <ContainerImage>
          <MainImage source={image} resizeMode="contain" />
        </ContainerImage>
        <ContainerAlerts>
          <ContainerAlertsHeader>
            <AlertsHeaderText>Alertas</AlertsHeaderText>
          </ContainerAlertsHeader>
          <ContainerAlertsMain>
            {new Array(5).fill({}).map((v, index) => (
              <ContainerAlert key={index}>
                <ContainerAlertHeader>
                  <AlertTitle>Alteração da data da AV1</AlertTitle>
                </ContainerAlertHeader>
                <ContainerAlertBody>
                  <AlertBodyText>
                    A data foi alterada para o dia 22/10/2023
                  </AlertBodyText>
                </ContainerAlertBody>
              </ContainerAlert>
            ))}
          </ContainerAlertsMain>
        </ContainerAlerts>
      </ContainerMain>
    </Container>
  );
}
