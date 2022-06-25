import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { useAppState } from "../hooks/useAppState";

const delta = {
  latitudeDelta: 0.09,
  longitudeDelta: 0.05
}

const Map: React.FC = () => {

  const state = useAppState();

  const renderMap = () => {
    if(!state.current.coords.latitude || !state.current.coords.longitude){
      return <Text>Loading Map...</Text>
    } else {
      return (
        <MapView
          style={styles.mapView}
          initialRegion={{ ...state.current.coords, ...delta }}
        >
          {[state.current, ...state.history].map((item, idx) => (
            <Marker
              key={idx}
              coordinate={{ ...item.coords, ...delta }}
            />
          ))}
        </MapView>
      );
    }
  }

  return (
    <View style={styles.container}>
      {renderMap()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mapView: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  }
});

export default Map;