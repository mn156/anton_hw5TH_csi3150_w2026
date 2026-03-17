let sliderCarYear = document.getElementById("carYear");
let CarYearOutut = document.getElementById("carYearOutput");
let sliderCarPrice  = document.getElementById("carPrice");
let CarPriceOutput = document.getElementById("carPriceOutput");
let MaxInput = document.getElementById("MaxMileage");
let MinInput = document.getElementById("MinMileage");

MaxInput.addEventListener("input", () =>{
    productCardDisplay.innerHTML = "";
    filterForCar();
})

MinInput.addEventListener("input", () =>{
    productCardDisplay.innerHTML = "";
    filterForCar();
})

sliderCarPrice.addEventListener("input", () => {
    CarPriceOutput.textContent = sliderCarPrice.value;
    productCardDisplay.innerHTML = "";
    filterForCar();
});
sliderCarYear.addEventListener('input', () => {
    CarYearOutut.textContent = sliderCarYear.value;
    productCardDisplay.innerHTML = "";
    filterForCar();
});

const carMakeDropdown = document.getElementById("carMake");
carMakeDropdown.addEventListener("input", () =>{
    productCardDisplay.innerHTML = "";
    filterForCar();
})

let carArray = [];
usedCars.forEach(make => {
    const option = document.createElement("option")

    let hasmake = carArray.includes(make.make);

    if(hasmake !== true){
        carArray.push(make.make);
        option.textContent = make.make
        option.value = make.make
        carMakeDropdown.appendChild(option)
    }

    
});

const carColorDropdown = document.getElementById("carColor");
carColorDropdown.addEventListener("input", () => {
    productCardDisplay.innerHTML = "";
    filterForCar();
})

let CarColor = [];
usedCars.forEach(color => {
    const option = document.createElement("option")

    let hasmake = CarColor.includes(color.color);

    if(hasmake !== true){
        CarColor.push(color.color);
        option.value = color.color
        option.textContent = color.color
        carColorDropdown.appendChild(option)
    }
})

const productCardDisplay = document.querySelector(".productGrid");


usedCars.forEach(car =>{
    const div = document.createElement("div");
    div.classList.add("productCard");

    div.innerHTML = `
    <h3>${car.year} ${car.make}<h3>
    <p>Model: ${car.model}</p>
    <p>Price: $${car.price}</p>
    <p>Mileage: ${car.mileage} miles</p>
    <p>Color: ${car.color}</p>
    <p>Gas Mileage: ${car.gasMileage}</p>
    `


    productCardDisplay.appendChild(div)
})


function filterForCar() {

    usedCars.forEach(car => {
        if (car.year <= parseInt(sliderCarYear.value) 
            && car.price <= parseInt(sliderCarPrice.value) &&
            (car.make === carMakeDropdown.value || carMakeDropdown.value === "") &&
            (car.color === carColorDropdown.value || carColorDropdown.value === "")
            && (car.mileage <= parseInt(MaxInput.value) || MaxInput.value === "") && 
            (car.mileage >= parseInt(MinInput.value) || MinInput.value === "")){
            const div = document.createElement("div");
            div.classList.add("productCard");
            div.innerHTML = `
                <h3>${car.year} ${car.make}<h3>
                <p>Model: ${car.model}</p>
                <p>Price: $${car.price}</p>
                <p>Mileage: ${car.mileage} miles</p>
            `


            productCardDisplay.appendChild(div)
        }    
    });
}



