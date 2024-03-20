/**
 * Game venant de l'api
 */
export interface Game {
    id: number;
    titre: string;
    date: Date;
    videoGame ?: VideoGame
}

export type Games = Game[];

export interface VideoGame {
    id: number;
    label: string;
}

export type VideoGames = VideoGame[];