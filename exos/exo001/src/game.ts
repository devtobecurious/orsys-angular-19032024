import { TypeOrUndefined } from "./custom-types";

export class VideoGame {
    id !: number;
    label: TypeOrUndefined<string>;

    constructor(label: string) {
        this.label = label;
    }
}

export type GameStatus = 'NotStarted' | 'Success' | 'Failed' | undefined;

export interface Game {
    title: string;
    date: Date;
    videoGame: VideoGame;
    status: GameStatus;
}