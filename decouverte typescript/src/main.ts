import { Weapon,factoryWeapon } from './weapon';

// evan@boissonnot.fr

class Wookiee {
    prenom: string | undefined;
    // private mainWeapon !: Weapon; // be carefull à utiliser avec grande prudence

    constructor(private weapon: Weapon) {
        //this.prenom = '';
        //this.mainWeapon = weapon;

        // if(! this.mainWeapon) {
        //     this.mainWeapon = factoryWeapon();
        // }
    }

    // get thePrenom(): string {
    //     return this.prenom;
    // }

    set thePrenom(value: string) {
        this.prenom = value;
    }
}

const chewie = new Wookiee(new Weapon());

if (chewie.prenom) { // type guard
    const result = chewie.prenom.toLowerCase();
}
chewie.prenom?.toLowerCase();