import React, { FC } from "react";
import { Color } from "../models/Color";
import { ColorListItem } from "./ColorListItem";


export interface ColorListActionsProps {
    onClearColors : () => void;
    onSortColors : () => void;
}

export const ColorListAction: FC<ColorListActionsProps> = (props : ColorListActionsProps) => {
    return(
        <React.Fragment>
            <button type='button' onClick={props.onSortColors}> Sort </button>
            <button type='button' onClick={props.onClearColors}> Clear </button>
        </React.Fragment>
    );
}