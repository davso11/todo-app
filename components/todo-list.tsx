import { View, Text, StyleSheet, FlatList, FlatListProps } from "react-native";
import { BG, LIGHTGRAY, BORDER } from "../constants/styles";
import { Todo } from "../types";
import { Checkbox } from "./checkbox";
import { dayjs } from "../lib/dayjs";

function Task(todo: Todo) {
  return (
    <View style={styles.todo}>
      {/* TODO: Use Image instead of this dummy circle down here */}
      <View style={styles["todo-circle"]} />
      <View style={styles["todo-text-box"]}>
        <Text style={{ fontWeight: "600" }}>{todo.title}</Text>
        <Text style={{ fontSize: 12 }}>
          {dayjs(todo.targetDate).format("lll")}
        </Text>
      </View>
      <Checkbox />
    </View>
  );
}

interface TodoListProps<T>
  extends Omit<FlatListProps<T>, "data" | "renderItem"> {
  todos: T[];
}

export function TodoList<T extends Todo>({
  todos,
  style,
  ...props
}: TodoListProps<T>) {
  return (
    <View
      style={{
        width: "100%",
        borderRadius: 12,
        overflow: "hidden",
        ...BORDER,
      }}
    >
      <FlatList
        style={[styles.list, style]}
        data={todos}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        renderItem={({ item: todo }) => <Task {...todo} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: LIGHTGRAY,
            }}
          />
        )}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: BG,
  },
  todo: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  "todo-circle": {
    width: 44,
    height: 44,
    borderRadius: 44,
    backgroundColor: LIGHTGRAY,
  },
  "todo-text-box": {
    flex: 1,
    rowGap: 4,
  },
});
