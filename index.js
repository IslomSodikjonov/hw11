let car = {
    brand: "PORSCHE",
    model: "Taycan Turbo S",
    type: "sedan",
    year: "2022",
    color: "white",
    engine: "electric",
    horsePower: 760,
    maxSpeed: 270,
    price: 195000,
}



let country = {
    name: "France",
    capital: "Paris",
    established: 1792,
    independenceDay: "22nd of September", 
    locatuion: "Europe",
    area: 643800,
    population: 68042591,
    language: "French",
    callingCode: "+33",
    currency: "CFP franc",
    codeISO: "FR",
}



// Task 2
let union = Object.assign(car, {country})
console.log(union);



// Task 3
let keys = Object.keys(union) 
console.log(keys);



// Task 4
let values = Object.values(union)
console.log(values);



// Task 5 
let arr = [...keys, ...values]
console.log(arr);



// Task 6
let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
}

arr.filter((item) => {
    if(typeof item === "string") {
        types.string.push(item)
    } else if(typeof item === "number") {
        types.number.push(item)
    } else if(typeof item === "object") {
        types.object.push(item)
    } else if(typeof item === "boolean") {
        types.boolean.push(item)
    } else {
        console.log("ERROR(")
    }
})
console.log(types);