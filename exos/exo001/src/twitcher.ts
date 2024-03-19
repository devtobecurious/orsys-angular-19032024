import { TypeOrUndefined } from "./custom-types";
import { Game } from "./game";

export class Authentication {
    constructor(public login: string, public password: string) {
    }
}

export interface WithGames {
    games: Game[];
}

/**
 * Twitcher class
 */
export class Twitcher implements WithGames {
    //#region Fields
    auth: TypeOrUndefined<Authentication>;
    games: Game[] = [];
    friends: Twitcher[] = [];
    //#endregion

    constructor(public prenom: string, private urlTwitch: string) {
    }
    
}