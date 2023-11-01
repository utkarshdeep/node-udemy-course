// Object property shorthand

const names = 'Utkarsh'
const age = 30

const user = {
    name: names,
    age: age,
    location: 'Pune'
}

console.log(user)

// the shorthand is used when the property name & variable that stores its value is same. Like age in above case

const userNew = {
    name: names,
    age,
    location: 'Pune'
}

console.log(userNew)



// OBJECT DESTRUCTURING

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//verbose way of doing it

/* const label = product.label
const stock = product.stock */

//using label: productLabel, we can rename property when grabbing it from object
// default value like rating = 5 will be used when it is not defined in the product object

const { label: productLabel, stock = 5, rating = 5 } = product
console.log(productLabel)
console.log(stock)
console.log(rating)


const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

// This is happy case, where we have destructured expecting that someone passes an object
transaction('order', product)

// What is nothing is passed? It will fails. To fix this, we set default values.
transaction('order')