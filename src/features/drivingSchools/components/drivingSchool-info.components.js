import React from "react";
import {
  SchoolName,
  Rating,
  DrivingSchoolCard,
  DrivingSchoolCardCover,
  Info,
  Address,
  Section,
  SectionEnd,
  VacationText,
  SchoolText,
  Spacer,
} from "./drivingSchool-info.styles";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";

export const DrivingschoolInfo = ({ drivingSchools = {} }) => {
  const {
    name = "Den bedste køreskole",
    photos = [
      "https://media.istockphoto.com/photos/teenager-learning-to-drive-picture-id124089966",
    ],
    adress = "Frederiksberg",
    isOpenNow = false,
    rating = 4,
    isVacationClosed = true,
  } = drivingSchools;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <DrivingSchoolCard elevation={5}>
      <DrivingSchoolCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <SchoolName>{name}</SchoolName>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <Ionicons name="md-heart-sharp" size={18} color="red" />
            ))}
          </Rating>
          <SectionEnd>
            {isVacationClosed && (
              <VacationText> Holder Ferielukket </VacationText>
            )}
            <Spacer />
            {isVacationClosed && (
              <FontAwesome5 name="umbrella-beach" size={18} color="black" />
            )}
            {isOpenNow && <SchoolText> Se køreskolen </SchoolText>}
            <Spacer />
            {isOpenNow && (
              <AntDesign name="rightcircle" size={18} color="black" />
            )}
          </SectionEnd>
        </Section>
        <Address>Adresse: {adress}</Address>
      </Info>
    </DrivingSchoolCard>
  );
};
