// Make all properties optional without add ?
interface Animal {
    name: string;
    weight: number;
    specie: string
}

function updateAnimeal(animal: Animal, updateAnimal: Partial<Animal>): Animal {
    return {...animal, ...updateAnimal}
}
