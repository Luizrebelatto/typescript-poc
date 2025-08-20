async function getUser() {
  return { id: 1, name: "Ana" }
}

type User = Awaited<ReturnType<typeof getUser>>