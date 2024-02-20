import React from 'react';
import styled from 'styled-components';
import { deletePoster } from '../services/posterServices';
//import { getOnePoster } from '../services/posterServices';
//import ButtonEdit from '../components/ButtonEdit';


const PosterCard = styled.div`
    background-color: black;
    border-radius: 10px;
    padding: 40px;
    margin: 50px;
    margin-right: 150px;
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PosterImage = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border: 0.5em solid white;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const PosterInfo = styled.div`
    color: white;
    text-align: center;
`;

const ButtonDelete = styled.button`
  background-color: #9C325C;
  border-color: #CEA436;
  border-radius: 6px;
  color:#CEA436;
  width: 91px;
  height: 28px;
  margin-top: 5%;
  margin-bottom: 2%;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  `;

const Card = ({ posters }) => {
    const clickDelete = async (id) => {
            const result = await deletePoster(id);
    };
    //const clickEdit = async (id) => {
        //const result = await getOnePoster (id);
    //};

    return ( 
    <>
        {posters.map(poster =>  ( 
        < div key={poster.id}>
            <PosterCard key={poster.id} className="poster-card">
                <PosterImage src={poster.imageUrl} alt={poster.name} className="poster-card__image" />
                <PosterInfo className="poster-card__info">
                    <h2 className="poster-card__name">{poster.name}</h2>
                    <p className="poster-card__director">Director: {poster.director}</p>
                    <p className="poster-card__year">Year: {poster.year}</p>
                </PosterInfo>
                <ButtonDelete onClick={() => clickDelete(poster.id)} className="button-delete">DELETE</ButtonDelete>
                {/* <ButtonEdit onClick={() => clickEdit(poster.id)}/> */}
            </PosterCard>
        </div> 
        ))}
    </>
    );
};

export default Card;


