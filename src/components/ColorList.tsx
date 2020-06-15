import React, { FC } from "react";
import { Color } from "../models/Color";
import { ColorListItem } from "./ColorListItem";


export interface ColorListProps {
    colors: Color[],
    onDeleteColor : (id : number) => void;
    onClearColors : () => void;
}

export const ColorList: FC<ColorListProps> = (props : ColorListProps) => {
    return(
        <React.Fragment>
            <ul>
                {props.colors.map(color => <ColorListItem key={color.id} color={color} onDeleteColor={props.onDeleteColor}/>)} 
            </ul>
            <button type='button' onClick={props.onClearColors}> Clear </button>
        </React.Fragment>
    );
}