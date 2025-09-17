interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = {
  [P in keyof User]?: User[P];
};

const userUpdate: PartialUser = {
  email: 'novo-email@exemplo.com'
};