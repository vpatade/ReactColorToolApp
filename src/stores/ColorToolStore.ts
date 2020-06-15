import { IColorService } from "../services/IColorService";
import { observable, computed, action, runInAction, flow } from 'mobx'
import { Color } from "../models/Color";

export class ColorToolStore {
    constructor(private _colorSvc : IColorService) {}

    @observable
    private _colors = observable.array<Color>([]);

    @computed
    get colors() {
        return this._colors.slice();
    }

    @action.bound
    async refreshColors() {
        const colors = await this._colorSvc.allColors();

        runInAction(() => {
            this._colors.replace(colors);
        });
    }

    @action.bound
    addColor = flow(function* addColorFlow(this: ColorToolStore, color : Color) {
        yield this._colorSvc.addColor(color);
        yield this.refreshColors();
    });

    @action.bound
    async deleteColor(id: number) {
        const colors = await this._colorSvc.deleteColor(id);
        await this.refreshColors();
    }

    @action.bound
    async clearColors() {
        await Promise.all(this._colors.map(c => this.deleteColor(c.id!)));
        return this.refreshColors();
    }
}