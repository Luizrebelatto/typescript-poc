class Character {
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

type CharacterInstance = InstanceType<typeof Character>

const sonic: CharacterInstance = new Character(1, "Sonic")
