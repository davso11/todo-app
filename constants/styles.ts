export const MAIN = "#8338ec" as const;
export const MAIN_DARK = "#210E3B" as const;
export const BG = "#fff" as const; // "FCF9FF"
export const CHECKB0X_FILL = "#34e065" as const;
export const LIGHTGRAY = "#E6E6E6" as const;

export const SHADOW = {
  shadowColor: MAIN_DARK,
  shadowOpacity: 0.15,
  shadowRadius: 5,
  elevation: 10,
  shadowOffset: {
    width: 1,
    height: 1,
  },
};

export const BORDER = {
  borderWidth: 1,
  borderStyle: "solid" as const,
  borderColor: LIGHTGRAY,
};
