//Petición GET - Read

export const getPosters = async () => {
    const response = await fetch('http://localhost:3000/poster');
    const data = await response.json();
    return data;
}

//Petición POST

const createPosters = () => {
    
}

//Petición UPDATE

const updatePosters = () => {
    
}

//Petición DELETE

const deletePosters = () => {
    
}