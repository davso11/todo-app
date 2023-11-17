import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useCallback, useState } from "react";
import { useRouter } from "expo-router";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Container } from "../components/container";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Label } from "../components/label";
import DateInput from "../components/date-input";
import { postTodo } from "../utils/api";
import { PostTodoSchema } from "../types";
import { dayjs } from "../lib/dayjs";

type CalendarDate = Date | undefined;

export default function NewTodo() {
  const [date, setDate] = useState<CalendarDate>();
  const [time, setTime] = useState<CalendarDate>();
  const [note, setNote] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [openDateModal, setOpenDateModal] = useState(false);
  const [openTimeModal, setOpenTimeModal] = useState(false);
  const { mutateAsync: save, status: savingStatus } = useMutation({
    mutationFn: postTodo,
  });
  const router = useRouter();
  const qc = useQueryClient();

  const onDismissDate = useCallback(() => {
    setOpenDateModal(false);
  }, [setOpenDateModal]);

  const onDismissTime = useCallback(() => {
    setOpenTimeModal(false);
  }, [setOpenTimeModal]);

  const onConfirmDate = useCallback(
    (params: { date?: CalendarDate }) => {
      setDate(params.date);
      setOpenDateModal(false);
    },
    [setDate, setOpenDateModal]
  );

  const onConfirmTime = useCallback(
    ({ hours, minutes }: { hours: number; minutes: number }) => {
      const time = new Date(`2000-01-01 ${hours}:${minutes}:00`);
      setTime(time);
      setOpenTimeModal(false);
    },
    [setOpenTimeModal]
  );

  const showDateModal = () => {
    setOpenDateModal(true);
  };

  const showTimeModal = () => {
    setOpenTimeModal(true);
  };

  const submitHandler = async () => {
    try {
      const todo = await PostTodoSchema.parseAsync({
        title,
        createdAt: new Date(Date.now()).toISOString(),
        targetDate: dayjs(
          `${date?.toISOString().slice(0, 10)} ${time?.toISOString().slice(11)}`
        ),
        userId: "c04ea068-22c1-4003-8a7c-f7fd209eb227",
        note: note ?? null,
      });
      await save(todo, {
        async onSuccess(newTodo) {
          await qc.invalidateQueries({ queryKey: ["todos"] });
          router.push("/");
        },
      });
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container style={styles.container}>
            {/* TITLE */}
            <View style={styles.inputBox}>
              <Label required>Titre</Label>
              <Input
                value={title}
                onChangeText={setTitle}
                placeholder="Intitulé de la tâche"
              />
            </View>

            {/* TARGET DATE & TIME */}
            <View
              style={{
                flexDirection: "row",
                columnGap: 12,
              }}
            >
              <View style={[styles.inputBox, { flex: 1 }]}>
                <Label required>Date</Label>
                <DateInput value={date} onButtonPress={showDateModal} />
              </View>
              <View style={[styles.inputBox, { flex: 1 }]}>
                <Label required>Heure</Label>
                <DateInput
                  type="time"
                  value={time}
                  onButtonPress={showTimeModal}
                />
              </View>
            </View>

            {/* NOTE */}
            <View style={styles.inputBox}>
              <Text>Notes</Text>
              <Input
                multiline
                numberOfLines={10}
                value={note}
                onChangeText={setNote}
                placeholder="Notes..."
                style={{
                  height: 150,
                  padding: 10,
                }}
              />
            </View>

            {/* SUBMIT BUTTON */}
            <Button rounded={false} onPress={submitHandler}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                Sauvegarder
              </Text>
            </Button>
          </Container>
        </ScrollView>
        <DatePickerModal
          locale="fr"
          mode="single"
          visible={openDateModal}
          onDismiss={onDismissDate}
          date={date}
          onConfirm={onConfirmDate}
        />

        <TimePickerModal
          locale="fr"
          use24HourClock
          visible={openTimeModal}
          onDismiss={onDismissTime}
          onConfirm={onConfirmTime}
          hours={14}
          minutes={0}
          label="Heure"
          cancelLabel="Annuler"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    rowGap: 28,
  },
  inputBox: {
    rowGap: 10,
  },
  category: {
    width: 44,
    height: 44,
    borderRadius: 44,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});
