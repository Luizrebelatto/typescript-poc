type Actions = {
    add: string;
    remove: string;
    jump: string;
}

type ActionKeys = keyof Actions;

// Property 'jump' is missing in type '{ add: () => void; remove: () => void; }' but required in type 'OnEvents'.ts(2741)
const systemActions: OnEvents = {
    add: (): void => {},
    remove: (): void => {}
}

type OnEvents = {
    [Key in ActionKeys]: () => any
}