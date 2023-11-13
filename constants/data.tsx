import {
  Briefcase,
  GraduationCap,
  Palmtree,
  Cross,
  Dumbbell,
  HelpCircle,
} from "lucide-react-native";

export const DUMMY_TODOS = [
  {
    id: "1",
    title: "Terminer le 1er écran",
    targetDate: new Date("2023-11-12 06:00:00"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 1,
      label: "work",
    },
    note: null,
    isDone: false,
  },
  {
    id: "2",
    title: "Faire mes devoirs de classe",
    targetDate: new Date("2023-11-12 19:00:00"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 2,
      label: "education",
    },
    note: null,
    isDone: false,
  },
  {
    id: "3",
    title: "Regarder mon match de basket",
    targetDate: new Date("2023-11-12 23:30:00"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 3,
      label: "sport",
    },
    note: null,
    isDone: false,
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet",
    targetDate: new Date("2023-11-12"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 4,
      label: "leisure",
    },
    note: null,
    isDone: false,
  },
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet",
    targetDate: new Date("2023-11-12"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 5,
      label: "health",
    },
    note: null,
    isDone: false,
  },
  {
    id: "6",
    title: "Lorem ipsum dolor sit amet",
    targetDate: new Date("2023-11-12"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 1,
      label: "other",
    },
    note: null,
    isDone: false,
  },
  {
    id: "7",
    title: "Lorem ipsum dolor sit amet",
    targetDate: new Date("2023-11-12"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 1,
      label: "sport",
    },
    note: null,
    isDone: false,
  },
  {
    id: "8",
    title: "Lorem ipsum dolor sit amet",
    targetDate: new Date("2023-11-12 13:00:00"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 1,
      label: "work",
    },
    note: null,
    isDone: false,
  },
  {
    id: "9",
    title: "Lorem ipsum dolor sit amet",
    targetDate: new Date("2023-11-12"),
    createdAt: new Date("2023-11-12"),
    updateAt: new Date("2023-11-12"),
    category: {
      id: 1,
      label: "other",
    },
    note: null,
    isDone: false,
  },
];

export const TODO_CATEGORIES = [
  {
    label: "sport",
    color: "#ff6700",
    Icon: <Dumbbell color="#fff" size={20} />,
  },
  {
    label: "work",
    color: "#ffd500",
    Icon: <Briefcase color="#000" size={20} />,
  },
  {
    label: "health",
    color: "#ff002b",
    Icon: <Cross color="#fff" size={20} />,
  },
  {
    label: "education",
    color: "#3ab795",
    Icon: <GraduationCap color="#fff" size={20} />,
  },
  {
    label: "leisure",
    color: "#9d4edd",
    Icon: <Palmtree color="#fff" size={20} />,
  },
  {
    label: "other",
    color: "#e5e5e5",
    Icon: <HelpCircle color="#000" size={20} />,
  },
];
