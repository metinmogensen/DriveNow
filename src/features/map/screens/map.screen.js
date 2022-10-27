import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { MapCallout } from "../components/map-callout.component";
import { LocationContext } from "../../../services/location/location.context";
import { DrivingSchoolContext } from "../../../services/drivingSchools/drivingSchools.context";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { drivingSchools = [] } = useContext(DrivingSchoolContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.2,
        }}
      >
        {drivingSchools.map((drivingSchools) => {
          return (
            <MapView.Marker
              key={drivingSchools.name}
              title={drivingSchools.name}
              coordinate={{
                latitude: drivingSchools.geometry.location.lat,
                longitude: drivingSchools.geometry.location.lng,
              }}
            >
              <MapView.Callout>
                <MapCallout drivingSchools={drivingSchools} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
