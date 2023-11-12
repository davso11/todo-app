import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Container } from "../components/container";
import { TodoList } from "../components/todo-list";
import { BG, MAIN, MAIN_DARK } from "../constants/colors";
import { Button } from "../components/button";
import { useTodos } from "../hooks/api";
import { ScreenLoader } from "../components/screen-loader";
import { dayjs } from "../lib/dayjs";

function Home() {
  const { height } = useWindowDimensions();
  const { data: todos, status } = useTodos(
    "c04ea068-22c1-4003-8a7c-f7fd209eb227"
  );

  if (status === "pending") {
    return <ScreenLoader />;
  }

  if (status === "error") {
    return (
      <View style={styles.center}>
        <Text>Erreur survenue.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles._} />
      <Container style={[styles.container, { height }]}>
        {/* TITLE */}
        <View style={styles["title-box"]}>
          <Text style={[styles["title-box-text"], styles.date]}>
            {dayjs(Date.now()).format("ll")}
          </Text>
          <Text style={[styles["title-box-text"], styles.title]}>
            Mes tâches
          </Text>
        </View>

        {/* TODOS */}
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            style={{
              width: "100%",
              flexGrow: 0,
              maxHeight: 254,
            }}
          />
        ) : (
          <View style={styles["empty-todo-box"]}>
            <Text>Aucune tâche enregistrée.</Text>
          </View>
        )}

        {/* TODO: COMPLETED TASKS */}

        {/* NAV BUTTON */}
        <Link href="/new" asChild style={styles["nav-btn"]}>
          <Button>
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Nouvelle tâche
            </Text>
          </Button>
        </Link>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  _: {
    width: "100%",
    height: "20%",
    position: "absolute",
    backgroundColor: MAIN,
  },
  container: {
    paddingVertical: 24,
    rowGap: 32,
    position: "relative",
    alignItems: "center",
  },
  "title-box": {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 4,
  },
  "title-box-text": {
    color: "#fff",
    fontWeight: "600",
    textAlign: "auto",
  },
  date: {
    fontSize: 18,
  },
  title: {
    fontSize: 32,
  },
  "sub-title": {
    fontSize: 16,
    fontWeight: "600",
  },
  "nav-btn": {
    position: "absolute",
    bottom: 24,
  },
  "empty-todo-box": {
    width: "100%",
    minHeight: 165,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BG,
    borderRadius: 12,
    shadowColor: MAIN_DARK,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
