import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import styled from "styled-components/native";
import { DrivingschoolInfo } from "../components/drivingSchool-info.components";
import { DrivingSchoolContext } from "../../../services/drivingSchools/drivingSchools.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const DrivingSchoolScreen = () => {
  const { isLoading, error, drivingSchools } = useContext(DrivingSchoolContext);
  console.log(DrivingSchoolContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={drivingSchools}
        renderItem={({ item }) => {
          return <DrivingschoolInfo drivingSchools={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
