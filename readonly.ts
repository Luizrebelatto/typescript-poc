interface User  {
    readonly id: string;
    name: string;
    age: number
}

const user: User = {
    id: '2',
    name: 'luiz',
    age: 24
}

user.name = 'Gabriel'
user.age = 25
user.id = '9' // Cannot assign to 'id' because it is a read-only property