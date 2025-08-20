interface Product {
    id: number;
    name: string;
    category: string;
}

type newProduct = Exclude<keyof Product, "category">