import React from "react";
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transportes from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { IconeTema } from "./ui";

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante"/>,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades"/>,
        Saude: <IconeTema src={saude} alt="Saude"/>,
        Transporte: <IconeTema src={transportes} alt="Transporte"/>,
        default: <IconeTema src={outros} alt="Outro"/>
    }

    return Images[type] || Images.default;
}