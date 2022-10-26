import React, { useState } from "react";
import { List } from "react-native-paper";
import { StatusBar, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components/native";
import { DrivingschoolInfo } from "../components/drivingSchool-info.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const DrivingSchoolDetailScreen = ({ route }) => {
  const [bKørekortExpanded, setBkørekortExpanded] = useState(false);
  const [MotorcykelkortExpanded, setMotorcykelkortExpanded] = useState(false);
  const [telefonExpanded, setTelefonExpanded] = useState(false);
  const [emailExpanded, setEmailExpanded] = useState(false);

  const { drivingSchools } = route.params;
  return (
    <SafeArea>
      <DrivingschoolInfo drivingSchools={drivingSchools} />
      <ScrollView>
        <List.Accordion
          title="Kategori B Kørekort"
          left={(props) => <List.Icon {...props} icon="car-hatchback" />}
          expanded={bKørekortExpanded}
          onPress={() => setBkørekortExpanded(!bKørekortExpanded)}
        >
          <List.Item title="Lyn-kursus" />
          <List.Item title="Alm. kursus" />
        </List.Accordion>

        <List.Accordion
          title="Motorcykelkort"
          left={(props) => <List.Icon {...props} icon="motorbike" />}
          expanded={MotorcykelkortExpanded}
          onPress={() => setMotorcykelkortExpanded(!MotorcykelkortExpanded)}
        >
          <List.Item title="Alm. kursus" />
          <List.Item title="Lyn-kursus" />
        </List.Accordion>

        <List.Accordion
          title="Kontakt via Telefon"
          left={(props) => <List.Icon {...props} icon="phone" />}
          expanded={telefonExpanded}
          onPress={() => setTelefonExpanded(!telefonExpanded)}
        >
          <List.Item title="Ejer: 12312312" />
          <List.Item title="Kontor: 89898989" />
        </List.Accordion>

        <List.Accordion
          title="Kontakt Via E-mail"
          left={(props) => <List.Icon {...props} icon="at" />}
          expanded={emailExpanded}
          onPress={() => setEmailExpanded(!emailExpanded)}
        >
          <List.Item title="memo19ad@gmail.com" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
