import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
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

export const DrivingSchoolScreen = ({ navigation }) => {
  const { isLoading, error, drivingSchools } = useContext(DrivingSchoolContext);
  console.log(navigation);
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
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DrivingSchoolsDetails", {
                  drivingSchools: item,
                })
              }
            >
              <DrivingschoolInfo drivingSchools={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
