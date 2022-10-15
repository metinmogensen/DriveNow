import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import styled from 'styled-components/native'

const SchoolName = styled.Text`
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.body};
color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Rating = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
   padding: ${(props) => props.theme.space[3]};
 `;

const DrivingSchoolCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const DrivingSchoolCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[1]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const DrivingschoolInfo = ({drivingSchools = {}}) => {
    const {
        name = "Den bedste køreskole",
        icon,
        photos = [
            "https://media.istockphoto.com/photos/teenager-learning-to-drive-picture-id124089966"
        ],
        adress = "Frederiksberg",
        isOpenNow = true,
        rating = 4,
        isVacationClosed,
    } = drivingSchools

    return (
        <DrivingSchoolCard elevation={5}>
          <DrivingSchoolCardCover key={name} source={{ uri: photos[0] }} />
          <Info>
          <SchoolName>{name}</SchoolName>
          <Rating>{rating} ud af 5 stjerner</Rating>
          <Address>Adresse: {adress}</Address>
          </Info>
        </DrivingSchoolCard>
      );
    };
    
