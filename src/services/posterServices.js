//Petición GET - Read

export const getPosters = async () => {
    const response = await fetch('http://localhost:3000/posters');
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

export const deletePoster = async (id) => {
    const result = await fetch(`http://localhost:3000/posters/${id}`, {
    method: 'DELETE'});
    return result;
};