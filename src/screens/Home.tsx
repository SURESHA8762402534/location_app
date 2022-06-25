import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import moment from "moment";

import { useAppState } from "../hooks/useAppState";
import { useDispatch } from "../hooks/useDispatch";
import { useInterval } from "../hooks/useInterval";
import { getLocation, getNewLocationHistory } from "../utils/helpers";
import { getLocationDetails, checkHttpStat } from "../actions";
import { SET_LOCATION_HISTORY, SET_CURRENT_LOCATION } from "../contexts/actions";
import { State } from "../types";

import CurrentLocation from "../components/CurrentLocation";
import PreviousLocations from "../components/PreviousLocations";
import Button from "../components/Button";

const Home: React.FC = () => {

  const state = useAppState();
  const dispatch = useDispatch();
  const stateRef = useRef<State>(state);

  const saveCurrentLocation = async () => {
    const data = await getLocation();
    if(data){
      const coords = {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude
      }
      const locationDetails = await getLocationDetails(coords.latitude, coords.longitude);
      if(locationDetails.success){
        const statusData = await checkHttpStat(locationDetails.data);
        if(statusData.success){
          const newHistory = getNewLocationHistory(
            stateRef.current?.current,
            stateRef.current?.history
          );
          dispatch({
            type: SET_CURRENT_LOCATION,
            payload: {
              current: {
                name: locationDetails.data,
                time: moment().format("DD/MM/YYYY, hh:mm:ss"),
                coords: coords
              },
              history: newHistory
            }
          });
        } else {
          Alert.alert("Error", statusData.data);
        }
      } else {
        Alert.alert("Error", locationDetails.data);
      }
    }
  }

  const removeItem = (index: number) => {
    const newHistory = state?.history.filter((_, idx) => idx !== index);
    dispatch({
      type: SET_LOCATION_HISTORY,
      payload: newHistory
    });
  }

  const clearAll = () => {
    dispatch({
      type: SET_LOCATION_HISTORY,
      payload: []
    });
  }
  
  useInterval(() => {
    saveCurrentLocation();
  });

  useEffect(() => {
    stateRef.current = state;
  }, [state.current.time, state.history.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Location Manager</Text>
      <Text style={styles.subHeader}>Current Location</Text>
      <CurrentLocation data={state.current} />
      <Text style={styles.subHeader}>Previous Locations</Text>
      <PreviousLocations history={state.history} removeItem={removeItem} />
      <Button
        title="Clear All"
        onPress={clearAll}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    position: "relative"
  },
  header: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  subHeader: {
    color: "#999",
    fontSize: 16,
    marginBottom: 8
  },
  button: {
    position: "absolute",
    bottom: "2%",
    right: "5%",
    width: "100%",
    backgroundColor: "blue",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default Home;