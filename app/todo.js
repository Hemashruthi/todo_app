import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import Task from "./task";
import { useContext } from "react";
import { TodoContext } from "./Hooks/TodoContext";
import TodoProvider from "./Hooks/TodoContext";
const Todo = () => {
  const [task, setTask] = useState();
  // const todos.todos = useContext(TodoContext);
  const { todos, setTodos } = useContext(TodoContext);

  // console.log("context:", todos, );
  const handleTask = () => {
    Keyboard.dismiss();
    setTodos([...todos, task]);
    setTask(null);
  };

  const completeTask = (index) =>
    Alert.alert("Did you complete the task?", "", [
      { text: "yes", onPress: () => removeTask(index) },
      { text: "no", onPress: () => console.log("No") },
    ]);

  const removeTask = (index) => {
    let itemsCopy = [...todos];
    itemsCopy.splice(index, 1);
    setTodos(itemsCopy);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Today Tasks!!</Text>
        {todos.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.keyboardWrap}
      >
        <TextInput
          placeholder="Write a task"
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={handleTask}>
          <View style={styles.addWrap}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    top: 10,
    left: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 11,
  },

  todo: {
    width: "90%",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    top: 70,
  },
  keyboardWrap: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    left: 20,
    width: 250,
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#e8eaed",
  },
  addWrap: {
    width: 50,
    height: 50,
    right: 20,
    backgroundColor: "#e8eaed",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default Todo;
