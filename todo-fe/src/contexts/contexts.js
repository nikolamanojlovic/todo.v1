import { createContext } from "react";
import { lightTheme } from "../style/theme";

const ThemeContext = createContext(lightTheme);
const UserContext = createContext(undefined);

export {
    ThemeContext,
    UserContext
}