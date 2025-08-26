function createGame(id: number, name: string, qtdLevels: number) {
  return { id, name, qtdLevels }
}

type CreateGameParams = Parameters<typeof createGame>
// CreateGameParams = [number, string, number]

function UpdateGame(data: CreateGameParams, updateData: Partial<CreateGameParams>){
    return {...data, ...updateData}
}
