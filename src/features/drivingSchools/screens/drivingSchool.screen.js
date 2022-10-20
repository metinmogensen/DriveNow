import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList, View } from "react-native";
import styled from "styled-components/native";
import { DrivingschoolInfo } from "../components/drivingSchool-info.components";
import { DrivingSchoolContext } from "../../../services/drivingSchools/drivingSchools.context";
import { Search } from "../components/search.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const DrivingSchoolScreen = () => {
  const { isLoading, error, drivingSchools } = useContext(DrivingSchoolContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />

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
