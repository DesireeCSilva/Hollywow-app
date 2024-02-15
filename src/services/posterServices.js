//Petición GET - Read

export const getPosters = async () => {
    const response = await fetch('http://localhost:3000/posters');
    const data = await response.json();
    return data;
}

//Petición GET de un solo objeto

export const onePoster = async () => {
    const response = await fetch(`http://localhost:3000/posters/${id}`);
    const data = await response.json();
    return data;
}

//Petición POST

export const createPoster = async (newPoster) => {

    const result = await fetch(`http://localhost:3000/posters`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPoster),
    });
}

//Petición UPDATE

export const updatePoster = async  (id, editPoster) => {
    const response = await fetch(`http://localhost:3000/posters/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(editPoster),
    })
}

//Petición DELETE

export const deletePoster = async (id) => {
    const result = await fetch(`http://localhost:3000/posters/${id}`, {
    method: 'DELETE'});
    return result;
};