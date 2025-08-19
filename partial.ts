// Make all properties optional without add ?
interface Animal {
    name: string;
    weight: number;
    specie: string
}

function updateAnimal(animal: Animal, updateAnimal: Partial<Animal>): Animal {
    return {...animal, ...updateAnimal}
}
