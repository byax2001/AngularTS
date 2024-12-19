console.log("Desestructuración de Funciones:");
export interface Product {
    description: string;
    price: number;
}  
const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}
const tablet: Product = {
    description: 'iPad Air', 
    price: 250.0
}
interface TaxtCalculationOptions{
    tax:number,
    products:Product[]
}

//Funcion sin desestructuración
export function calculateTax(options: TaxtCalculationOptions): number[] {
    let total=0;
    options.products.forEach(product => {
        total += product.price;
    });
    return [total,total * options.tax];
}

const shoppingCart=[phone,tablet];
const taxValue = 0.16;
const result = calculateTax({tax:taxValue, products:shoppingCart});
console.log("Total:", result[0]);
console.log("Total with Tax:", result[1]);



//Funcion con desestructuración 2
function calculateTax2(options: TaxtCalculationOptions):[number,number] {
    let total=0;
    options.products.forEach(({price}) => {
        total += price;
    });
    return [total,total * options.tax];
}
const shoppingCart2=[phone,tablet];
const taxValue2 = 0.16;
const [total,TotalWithTaxt ] = calculateTax({tax:taxValue2, products:shoppingCart2});

console.log("Total:", total);
console.log("Total with Tax:", TotalWithTaxt);

//Funcion con desestructuración 3
function calculateTax3({tax, products}: TaxtCalculationOptions): number[] {
    let total=0;
    products.forEach(product => {
        total += product.price;
    });
    return [total,total * tax];
}

//Funcion con desestructuración 4
function calculateTax4(options: TaxtCalculationOptions): number[] {
    let total=0;
    const {tax, products} = options;

    products.forEach(product => {
        total += product.price;
    });
    return [total,total * tax];
}