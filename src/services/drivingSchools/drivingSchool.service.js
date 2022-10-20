import { mocks, mockImages } from "./mock";
import camelize from "camelize";

// Dette er mock for at arbejde på det uden at lave en database først.
// Dette gør også at vi ikke behøver at lave en storybook for at arbejde på UI uden at være bundet af extern logik

export const drivingSchoolRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject();
    } else {
      resolve(mock);
    }
  });
};

export const requestTransformer = ({ results = [] }) => {
  const mappedResults = results.map((drivingSchool) => {
    drivingSchool.photos = drivingSchool.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...drivingSchool,
      isOpenNow:
        drivingSchool.opening_hours && drivingSchool.opening_hours.open_now,
      isVacationClosed: drivingSchool.business_status === "CLOSED_TEMPORARILY",
      adress: drivingSchool.vicinity,
      id: drivingSchool.place_id,
    };
  });
  return camelize(mappedResults);
};
