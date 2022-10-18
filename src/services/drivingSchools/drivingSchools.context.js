import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/location.context";
import {
  drivingSchoolRequest,
  requestTransformer,
} from "./drivingSchool.service";

export const DrivingSchoolContext = createContext();

export const DrivingSchoolContextProvider = ({ children }) => {
  const [drivingSchools, setDrivingSchools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrievedrivingSchools = (loc) => {
    setIsLoading(true);
    setDrivingSchools([]);
    setTimeout(() => {
      drivingSchoolRequest(loc)
        .then(requestTransformer)
        .then((results) => {
          setIsLoading(false);
          setDrivingSchools(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lng},${location.lat}`;
      retrievedrivingSchools(locationString);
    }
  }, [location]);
  return (
    <DrivingSchoolContext.Provider
      value={{
        drivingSchools,
        isLoading,
        error,
      }}
    >
      {children}
    </DrivingSchoolContext.Provider>
  );
};
