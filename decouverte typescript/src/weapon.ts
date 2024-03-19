// es module => esm

// non visible 
class Size {

}

export class Weapon {
    size: Size = new Size();
}

export function factoryWeapon() {
    return new Weapon();
}

export const defaultWeapon = factoryWeapon();