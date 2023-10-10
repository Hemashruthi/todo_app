import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function task(props) {
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}> 
            <TouchableOpacity>
                <Text style={styles.text}>{props.text}</Text>
                </TouchableOpacity>
            
            </View>
           
        </View>
    );
}
const styles = StyleSheet.create({
   items: {
    left: 10,
    right: 10,
    padding: 20, 
    marginBottom: 20, 
    borderRadius:10,
    backgroundColor: "#ffcccb",
    flexDirection: "row",
    alignItems: 'center',
    width: "90%",
    top: 20,
   
   },
   text: {
    fontWeight: "400",
    fontSize: 17,
    
   },
   itemLeft: {
    flexDirection:"row",
    alignItems: "center",
    flexWrap: "wrap",
   }
})

export default task;