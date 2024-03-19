function Jedi(prenom) {
    this.prenom = prenom;
    console.info('moi ?', this);
}

function DarkJedi(prenom, colorEye) {
    this.prenom = prenom;
    this.colorEye = colorEye;

    console.info('moi ?', this);
}

Jedi('Luke');

const jedi = new Jedi('Leia');
const jedi2 = new Jedi('Anakin');


const DarkJediAvecContextDuJediFunction = DarkJedi.bind(jedi, 'Dark vador', 'red');
DarkJediAvecContextDuJediFunction();

class Weapon {
    #puissance = 50; // champ privé (es2023+)

    constructor(puissance) {
        this.#puissance = puissance;
    }

    get puissance() {
        return this.#puissance;
    }

    set puissance(value) {
        this.#puissance = value;
    }
}

const blaster = new Weapon(15);
blaster.puissance = 18;

