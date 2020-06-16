import React, { FC } from "react"
import { ToolHeader } from "./ToolHeader"
import { ColorForm } from "./ColorForm";
import { Color } from "../models/Color";
import { ColorList } from "./ColorList";
import { ColorListAction } from './ColorListAction'

export interface ColorToolProps {
    colors : Color[];
    headerText : string;
    buttonText: string;
    onAddColor : (color : Color) => void;
    onDeleteColor : (id : number) => void;
    onClearColors : () => void;
    onSortColors : () => void;
}

export const ColorTool: FC<ColorToolProps> = (props: ColorToolProps) => {
    return (
        <React.Fragment>
            <ToolHeader headerText = {props.headerText} />
            <ColorList colors={props.colors} onDeleteColor={props.onDeleteColor} />
            <ColorListAction onClearColors={props.onClearColors} onSortColors={props.onSortColors}/>
            <ColorForm buttonText={props.buttonText} onAddColor={props.onAddColor}/>
        </React.Fragment>
    );
}