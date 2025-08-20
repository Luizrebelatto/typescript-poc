interface User {
  name: string
  password: string
}

type userWithoutPassword = Omit<User, "password">