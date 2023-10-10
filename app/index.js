import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Platform, Image } from "react-native";
import { Link } from "expo-router";
import TodoProvider from "./Hooks/TodoContext";
function index(props) {
  return (

      <View style={styles.background}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require("../assets/todo.jpg")} />
          <Text style={styles.heading}>TODO APP</Text>
        </View>

        <Link href="/fail" asChild>
          <Text style={styles.login} />
        </Link>
        <Link href="/todo" asChild>
          <Text style={styles.register} />
        </Link>
      </View>
 
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
  },

  container: {
    position: "absolute",
    top: 180,
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
  login: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  register: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default index;
