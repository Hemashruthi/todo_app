import { Slot, Stack } from "expo-router";
import TodoProvider from "./Hooks/TodoContext";

export default function RootLayout() {
  return (
    <TodoProvider>
      <Stack initialRouteName="index" />
    </TodoProvider>
  );
}
