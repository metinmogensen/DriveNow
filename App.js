import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { DrivingSchoolScreen } from "./src/features/drivingSchools/screens/drivingSchool.screen";

export default function App() {
  return (
    <>
      <DrivingSchoolScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

