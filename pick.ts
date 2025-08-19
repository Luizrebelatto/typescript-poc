// create own types
// can only be used with type
// interface does not accept another existing type

interface Food {
    brand: string;
    supermarket: string;
    id: string;
}


type Food_Supermarket = Pick<Food, 'brand' | 'id'>

const supermarketFood: Food_Supermarket = {
    brand: 'nestle',
    id: '1'
}

type newBrand = keyof Food

type newFoodSupermarket = Pick<Food, newBrand>

type FastFood = {
    brand: string;
    place: string;
    id: string;
}

type FastFoodChoices = Pick<Food, 'brand' | 'id'>

const choice: Food_Supermarket = {
    brand: 'mac',
    id: '1'
}

// create generic
type PickSome<T, K extends keyof T> = Pick<T, K>;

type BasicUser = PickSome<Food, "brand" | "id">;
