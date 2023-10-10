import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function fail(props) {
    return (
      <View style={styles.background}>
        <Image source={require("../assets/fail.png")}></Image>
        <Text style={styles.heading}>Oops! Login Failed</Text>
        <Text style={styles.text}>Something technically wrong, Please try again</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBFBFA",
      },
    heading: {
        top: 20,
        fontSize: 30,
        color: "#E57159"
    },
    text:{
        top:25,


    }
})

export default fail;