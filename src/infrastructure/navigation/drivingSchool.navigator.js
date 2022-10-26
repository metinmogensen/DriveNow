import React from "react";
import { DrivingSchoolScreen } from "../../features/drivingSchools/screens/drivingSchool.screen";
import { DrivingSchoolDetailScreen } from "../../features/drivingSchools/screens/drivingSchoolDetails.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const DrivingSchoolStack = createStackNavigator();

export const DrivingSchoolNavigator = () => {
  return (
    <DrivingSchoolStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <DrivingSchoolStack.Screen
        name="DrivingSchools"
        component={DrivingSchoolScreen}
      />
      <DrivingSchoolStack.Screen
        name="DrivingSchoolsDetails"
        component={DrivingSchoolDetailScreen}
      />
    </DrivingSchoolStack.Navigator>
  );
};
