// Om types // https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
// Typescript har egne type mappings innebygd. Se docs (google typescript utility types)

interface Product {
    name: string;
    price: number;
}

type ReadOnlyProduct = {
    readonly [K in keyof Product]: Product[K];
};

// let product: ReadOnlyProduct = {
//     name: 'Johan',
//     price: 'asdf'
// };

let product: ReadOnlyProduct = {
    name: 'car',
    price: 10
};

// product.name = 'audi' Error

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

let product2: ReadOnly<Product> = {
    name: 'a',
    price: 1
};

type Optional<T> = {
    [K in keyof T]?: T[K];
};
