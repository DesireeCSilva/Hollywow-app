//Petición GET - Read

export const getPosters = async () => {
    const response = await fetch('http://localhost:3000/posters');
    const data = await response.json();
    return data;
}

//Petición POST

export const createPoster = async ({ imageUrl, name, director, year }) => {
    const newPoster = {
        imageUrl,
        name,
        director,
        year,
    };

    console.log(newPoster);

    const result = await fetch(`http://localhost:3000/posters`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPoster),
    });
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