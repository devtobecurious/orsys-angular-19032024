class Wookiee {
    private prenom: string;

    constructor(prenom: string) {
        this.prenom = prenom;
    }

    get thePrenom(): string {
        return this.prenom;
    }

    set thePrenom(value: string) {
        this.prenom = value;
    }
}

const chewie = new Wookiee('Chewie');