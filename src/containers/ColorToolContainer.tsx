import React, { FC, useContext, useEffect } from "react";
import { ColorToolStoreContext } from "../contexts";
import { useObserver } from 'mobx-react-lite'
import { ColorTool } from "../components/ColorTool";

export interface ColorToolContainerProps {}

export const ColorToolContainer : FC<ColorToolContainerProps> = () => {
    const store = useContext(ColorToolStoreContext);

    useEffect( () => {
        store.refreshColors();
    }, [ store ]);

    return useObserver(() => {
        const colorToolProps = {
            colors : store.colors,
            headerText : 'Color Tool',
            buttonText: 'Add Color',
            onAddColor : store.addColor,
            onDeleteColor : store.deleteColor,
            onClearColors : store.clearColors,
            onSortColors : store.sortColors,
        }

        return <ColorTool {...colorToolProps}></ColorTool>
    });
}