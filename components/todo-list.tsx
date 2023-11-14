import { useMemo } from "react";
import { View, Text, StyleSheet, FlatList, FlatListProps } from "react-native";
import { BG, LIGHTGRAY, BORDER } from "../constants/styles";
import { Todo } from "../types";
import { Checkbox } from "./checkbox";
import { dayjs } from "../lib/dayjs";
import { TODO_CATEGORIES } from "../constants/data";

function Task(todo: Todo) {
  const label = todo.category.label;
  const formatedDate = useMemo(() => {
    return dayjs(todo.targetDate).format("ll - LT");
  }, []);
  const category = useMemo(() => {
    return TODO_CATEGORIES.find((el) => el.label === label);
  }, []);

  return (
    <View style={styles.todo}>
      <View
        style={[
          styles["todo-circle"],
          {
            backgroundColor: category ? category.color : LIGHTGRAY,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        {category ? category.Icon : null}
      </View>
      <View style={styles["todo-text-box"]}>
        <Text style={{ fontWeight: "600" }}>{todo.title}</Text>
        <Text style={{ fontSize: 12 }}>{formatedDate}</Text>
      </View>
      <Checkbox />
    </View>
  );
}

interface TodoListProps<T>
  extends Omit<FlatListProps<T>, "data" | "renderItem"> {
  todos: ReadonlyArray<T>;
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
  },
  "todo-text-box": {
    flex: 1,
    rowGap: 4,
  },
});
