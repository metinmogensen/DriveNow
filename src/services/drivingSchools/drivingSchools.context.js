import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  drivingSchoolRequest,
  requestTransformer,
} from "./drivingSchool.service";

export const DrivingSchoolContext = createContext();

export const DrivingSchoolContextProvider = ({ children }) => {
  const [drivingSchools, setDrivingSchools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrievedrivingSchools = () => {
    setIsLoading(true);
    setTimeout(() => {
      drivingSchoolRequest()
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
    retrievedrivingSchools();
  }, []);
  console.log(drivingSchools);
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
