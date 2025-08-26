function getPlayer() {
  return { id: 1, name: "Luiz", game: 'Super Mario' }
}

type Player = ReturnType<typeof getPlayer>

const newPlayer: Player = { id: 2, name: "Joao", game: 'Fifa' }
// Property 'game' is missing in type '{ id: number; name: string; }' but required in type '{ id: number; name: string; game: string; }
