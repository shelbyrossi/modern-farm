const growingPlants = []


export const addPlant = (seed) => {
    const newseed = growingPlants.push(seed)
   
return newseed

}

let newPlant = addPlant("tomato")
console.log(newPlant)



export const usePlants = () => {
    const array = growingPlants

    return array

}



