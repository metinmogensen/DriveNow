import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

import { DrivingschoolInfo } from "../components/drivingSchool-info.components";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
`;

const DrivingSchoolListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const DrivingSchoolScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <DrivingSchoolListContainer>
      <DrivingschoolInfo />
    </DrivingSchoolListContainer>
  </SafeArea>
);
