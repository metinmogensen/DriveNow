import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { DrivingSchoolContextProvider } from "./src/services/drivingSchools/drivingSchools.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/auth.context";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmcQCISWPKs_bOcE5L8CtS3-5eYjz15Rg",
  authDomain: "drivrnow.firebaseapp.com",
  projectId: "drivrnow",
  storageBucket: "drivrnow.appspot.com",
  messagingSenderId: "933258985459",
  appId: "1:933258985459:web:e7e3437b21021e23d4dc86",
  measurementId: "G-9LSXPKEMJJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  // obs som i kan se på træet har jeg lavet et theme object, som benyttes til, at have ens tema i hele appen
  // temaet har alle adgang til.
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <LocationContextProvider>
            <DrivingSchoolContextProvider>
              <Navigation />
            </DrivingSchoolContextProvider>
          </LocationContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
