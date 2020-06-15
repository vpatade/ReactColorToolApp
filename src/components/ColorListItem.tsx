import { Color } from "../models/Color"
import React, { FC } from "react"

export type ColorListItemProps = {
    color : Color;
    onDeleteColor : (id : number) => void;
}

export const ColorListItem : FC<ColorListItemProps> = ({color, onDeleteColor:deleteColor}) => {
    return(
        <li key={color.id}>{color.name} - {color.hexcode} <button type='button' onClick={() =>deleteColor(color.id!)}> X </button></li>
    );
}