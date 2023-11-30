import styled from "styled-components/native";

export const ContainerBell = styled.View`
  position: relative;
`;

export const ContainerBellCountNotifications = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 26px;
  background-color: red;
  border-radius: 50px;
  top: -16px;
  right: -16px;
`;

export const BellCountNotificationsText = styled.Text`
  font-size: 16px;
  color: white;
`;
