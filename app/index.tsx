import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Container } from "../components/container";
import { TodoList } from "../components/todo-list";
import { BG, MAIN, BORDER } from "../constants/styles";
import { Button } from "../components/button";
import { useTodos } from "../hooks/api";
import { ScreenLoader } from "../components/screen-loader";
import { dayjs } from "../lib/dayjs";

const { height: deviceHeight } = Dimensions.get("window");

function Home() {
  const {
    data: todos,
    status,
    error,
  } = useTodos("c04ea068-22c1-4003-8a7c-f7fd209eb227");

  if (status === "pending") {
    return <ScreenLoader />;
  }

  if (status === "error") {
    console.log(error);

    return (
      <View style={styles.center}>
        <Text>Erreur survenue.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles._} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container style={[styles.container]}>
            {/* HEADER */}
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
                scrollEnabled={false}
                style={{
                  width: "100%",
                }}
              />
            ) : (
              <View style={styles["empty-todo-box"]}>
                <Text>Aucune tâche enregistrée.</Text>
              </View>
            )}
          </Container>
        </ScrollView>

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
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  _: {
    width: "100%",
    backgroundColor: MAIN,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    height: Math.max(deviceHeight * 0.3, 250),
  },
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 80,
    rowGap: 32,
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
    bottom: 16,
    left: 12,
    right: 12,
    marginHorizontal: "auto",
  },
  "empty-todo-box": {
    width: "100%",
    minHeight: 165,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BG,
    borderRadius: 12,
    ...BORDER,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
