import {Product, calculateTax} from './destructuring_functions'

console.log("Import Export de Funciones:");

const shoppingCart:Product[]=[
    {description: 'iPhone 12', price: 800.0},
    {description: 'MacBook Pro', price: 2500.0}
]

const [total, totalWithTax] = calculateTax({tax:0.16, products:shoppingCart});

console.log("Total:", total);
console.log("Total with Tax:", totalWithTax);