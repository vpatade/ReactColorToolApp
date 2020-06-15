import React, { FC } from "react"
import { Color } from "../models/Color"
import { useForm } from "../hooks/useForm";

export interface ColorFormProps {
    buttonText: string;
    onAddColor : (color: Color) => void;
}

export const ColorForm: FC<ColorFormProps> = (props : ColorFormProps) => {
    const [colorForm, change, resetColorForm] = useForm({
        name: '',
        hexcode : ''
    });

    const addColor = () => {
        props.onAddColor(colorForm);
        resetColorForm();
    }

    return(
        <form>
            <div>
                <label htmlFor="name-input">Name:</label>
                <input type='text' name='name' value={colorForm.name} onChange={change}/>
            </div>
            <div>
                <label htmlFor="hexcode-input">Hexcode:</label>
                <input type='text' name='hexcode'value={colorForm.hexcode} onChange={change} />
            </div>
            <button type='button' onClick={addColor}>{props.buttonText}</button>
        </form>
    );
}