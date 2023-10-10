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
  Button,
} from "react-native";

const TodoList = () => {
  const [task, setTask] = useState();

  const [todos, setTodos] = useState([
    { id: 1, text: "Go to Swimming Class", isDone: false },
    { id: 2, text: "Buy eraser", isDone: false },
    { id: 3, text: "Play badminton", isDone: false },
  ]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completeTask = (id) => {
    const itemsCopy = [...todos];
    itemsCopy.splice(id, 1);
    setTodos(() => itemsCopy);
  };

  const handleTask = () => {
    Keyboard.dismiss();
    setTodos([...todos, task]);
    setTask(null);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>TODO APP</Text>
      </View>
      {todos.map((todo) => (
        <TouchableOpacity
          key={todo.id}
          onPress={() => toggleTodo(todo.id)}
          style={[
            styles.todo,
            {
              backgroundColor: todo.isDone
                ? "rgb(160, 234, 160)"
                : "rgb(241, 159, 159)",
            },
          ]}
        >
          <Text style={styles.text}>{todo.text}</Text>
          <Button
            title="-"
            style={styles.del}
            onPress={() => completeTask(id)}
          ></Button>
        </TouchableOpacity>
      ))}

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
    backgroundColor: "#E8E9E8",
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
  container: {
    top: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 11,
  },
  del: {
    flexDirection: "row",
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
    backgroundColor: "#fcfcfc",
  },
  addWrap: {
    width: 50,
    height: 50,
    right: 15,
    backgroundColor: "#fcfcfc",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TodoList;
