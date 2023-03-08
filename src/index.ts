type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void;
}

let employee: {
} = { 
    id: 1,
    name: 'Johan',
    retire: (date: Date) => {
        console.log(date)
    }
};
