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
        <LocationContextProvider>
          <DrivingSchoolContextProvider>
            <Navigation />
          </DrivingSchoolContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
