import styled from "@emotion/native";
import { Link } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

const Container = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: 'row';
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const Card = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 200px;
  border-radius: 20px;
  background-color: #f4ef;
`;

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <Container>
      <Card>
        <Text>123</Text>
      </Card>
      <Card>
        <Text>123</Text>
      </Card>
    </Container>
  );
}
