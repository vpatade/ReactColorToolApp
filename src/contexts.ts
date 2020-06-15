import React from "react";
import { ColorToolStore } from "./stores/ColorToolStore";

export const ColorToolStoreContext = React.createContext<ColorToolStore>({} as ColorToolStore);