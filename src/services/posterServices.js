//Petición GET - Read

export const getPosters = async () => {
    const response = await fetch('http://localhost:3000/posters');
    const data = await response.json();
    return data;
}

//Petición POST

export const createPoster = async () => {
    const formPoster = document.getElementsByClassName("posters-form");

    const imageUrlValue = formPoster.elements[0].value;
    const nameValue = formPoster.elements[1].value;
    const directorValue = formPoster.elements[2].value;
    const yearValue = formPoster.elements[3].value;

    const newPoster = {
        "imageUrl": imageUrlValue,
        "name": nameValue,
        "director": directorValue,
        "year": yearValue,
    };

    const result = await fetch(`http://localhost:3000/posters`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newPoster),
    });
};

//Petición UPDATE

const updatePosters = () => {
    
}

//Petición DELETE

export const deletePoster = async (id) => {
    const result = await fetch(`http://localhost:3000/posters/${id}`, {
    method: 'DELETE'});
    return result;
};