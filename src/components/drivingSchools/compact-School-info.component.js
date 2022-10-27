import React from "react";
import {
  StyledText,
  Item,
  CompactWebview,
  CompactImage,
} from "./compact-School-info.styles";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export const CompactDrivingSchoolInfo = ({ drivingSchools }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: drivingSchools.photos[0] }} />
      <StyledText>{drivingSchools.name}</StyledText>
    </Item>
  );
};
