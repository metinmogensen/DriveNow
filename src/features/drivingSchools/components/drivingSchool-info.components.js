import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const DrivingschoolInfo = ({drivingSchools = {}}) => {
    const {
        name = "some School",
        icon,
        photos = [
            "https://media.istockphoto.com/photos/teenager-learning-to-drive-picture-id124089966"
        ],
        adresss = "Frederiksberg",
        isOpenNow = true,
        rating = 4,
        isVacationClosed,
    } = drivingSchools

    return (
        <Card elevation={5} style={styles.card}>
          <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
          <Text style={styles.title}>{name}</Text>
        </Card>
      );
    };
    
    const styles = StyleSheet.create({
      card: { backgroundColor: "white" },
      cover: { padding: 20, backgroundColor: "white" },
      title: { padding: 16 },
    });
