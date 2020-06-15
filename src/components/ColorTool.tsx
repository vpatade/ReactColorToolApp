import React, { FC } from "react"
import { ToolHeader } from "./ToolHeader"
import { ColorForm } from "./ColorForm";
import { Color } from "../models/Color";
import { ColorList } from "./ColorList";

export interface ColorToolProps {
    colors : Color[];
    headerText : string;
    buttonText: string;
    onAddColor : (color : Color) => void;
    onDeleteColor : (id : number) => void;
    onClearColors : () => void;
}

export const ColorTool: FC<ColorToolProps> = (props: ColorToolProps) => {
    return (
        <React.Fragment>
            <ToolHeader headerText = {props.headerText} />
            <ColorList colors={props.colors} onDeleteColor={props.onDeleteColor} onClearColors={props.onClearColors}/>
            <ColorForm buttonText={props.buttonText} onAddColor={props.onAddColor}/>
        </React.Fragment>
    );
}