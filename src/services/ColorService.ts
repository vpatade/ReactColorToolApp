import { IColorService } from "./IColorService";
import { Color } from "../models/Color";

export class ColorService implements IColorService {
    constructor(private baseUrl : string) {}

    private getCollectionUrl() {
        return this.baseUrl+'/'+'colors';
    }

    private getElementUrl(id: number) {
        return this.getCollectionUrl()+'/'+encodeURIComponent(id);
    }

    private getOptions(method = 'GET', body: object | null = null) {

        const options: RequestInit = {
            // method: method,
            method,
        };

        const headers: { [x: string]: string } = {};

        if (method === 'PUT' || method === 'POST') {
            headers['Content-Type'] = 'application/json';
        }

        if (Object.getOwnPropertyNames(headers).length > 0) {
            options.headers = headers;
        }

        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        return options;
    }

    async allColors() {
        const res = await fetch(this.getCollectionUrl());
        return res.json();
    }

    async addColor(color : Color) {
        const res = await fetch(this.getCollectionUrl(), this.getOptions('POST', color));
        return res.json();
    }

    async deleteColor(id : number) {
        const res = await fetch(this.getElementUrl(id), this.getOptions('DELETE'));
        return res.json();
    }
}