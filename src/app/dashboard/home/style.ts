import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
  gap: 30px;
`;

export const TitleText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export const ContainerMain = styled.View`
  align-items: center;
`;

export const ContainerImage = styled.View``;

export const MainImage = styled.Image`
  height: 300px;
`;

export const ContainerAlerts = styled.View`
  gap: 10px;
  width: 100%;
`;

export const ContainerAlertsHeader = styled.View``;

export const AlertsHeaderText = styled.Text`
  font-size: 20px;
`;

export const ContainerAlertsMain = styled.ScrollView``;

export const ContainerAlert = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  padding-top: 10px;
  padding-bottom: 10px;

  gap: 8px;
`;

export const ContainerAlertHeader = styled.View``;

export const AlertTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

export const ContainerAlertBody = styled.View``;

export const AlertBodyText = styled.Text`
  font-size: 18px;
`;
