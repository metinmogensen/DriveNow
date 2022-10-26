import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { DrivingschoolInfo } from "../components/drivingSchool-info.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const DrivingSchoolDetailScreen = ({ route }) => {
  const { drivingSchools } = route.params;
  return (
    <SafeArea>
      <DrivingschoolInfo drivingSchools={drivingSchools} />
    </SafeArea>
  );
};
