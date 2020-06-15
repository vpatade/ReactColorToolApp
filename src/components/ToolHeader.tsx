import React, { FC } from 'react'

export interface ToolHeaderProps {
    headerText : string
}

export const ToolHeader:FC<ToolHeaderProps> = (props : ToolHeaderProps) => {
    return (
        <header>
            <h1>{props.headerText}</h1>
        </header>
    );
}