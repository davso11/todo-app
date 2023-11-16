import { View } from "react-native";
import { CalendarDays, Clock } from "lucide-react-native";
import { dayjs } from "../lib/dayjs";
import { Input } from "./input";
import { Button } from "./button";

type CalendarDate = Date | undefined;

interface DateInputProps {
  type?: "date" | "time";
  value?: CalendarDate;
  onButtonPress: () => void;
}

export default function DateInput({
  type = "date",
  value,
  onButtonPress,
}: DateInputProps) {
  const formatedDate = value
    ? dayjs(value).format(type === "date" ? "l" : "H:mm:ss")
    : undefined;

  return (
    <View style={{ position: "relative" }}>
      <Input
        editable={false}
        value={formatedDate}
        keyboardType="numbers-and-punctuation"
        placeholder={type === "date" ? "Date" : "Heure"}
        maxLength={9}
      />
      <Button
        style={{
          width: 24,
          height: 24,
          paddingHorizontal: 0,
          paddingVertical: 0,
          position: "absolute",
          right: 10,
          top: "50%",
          transform: [
            {
              translateY: -12,
            },
          ],
        }}
        onPress={() => onButtonPress()}
      >
        {type === "date" ? (
          <CalendarDays size={14} color="#fff" />
        ) : (
          <Clock size={14} color="#fff" />
        )}
      </Button>
    </View>
  );
}
