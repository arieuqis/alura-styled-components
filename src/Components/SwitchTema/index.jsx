import React from "react";

import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../ui";

const claro = <Icone src={ThemeOn} alt="Tema claro" />;
const escuro = <Icone src={ThemeOff} alt="Tema claro" />;

export default ({ tema }) => (tema ? escuro : claro);
