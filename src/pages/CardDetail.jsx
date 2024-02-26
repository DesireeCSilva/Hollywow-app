import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePoster } from '../services/posterServices';

const CardDetail = () => {
    const { id } = useParams();
    const [poster, setPoster] = useState(null);

    useEffect(() => {
        const fetchPosterById = async () => {
        try {
            const response = await getOnePoster(id);
            setPoster(response);
        } catch (error) {
            console.error('Error fetching poster by ID:', error);
        }
        };

        fetchPosterById();
    }, [id]);

    return (
        <>
        {poster && (
            <div>
                <img className="card-detail__imageUrl" src={poster.imageUrl}/>
                <h2 className="card-detail__name">{poster.name}</h2>
                <p className="card-detail__director">Director: {poster.director}</p>
                <p className="card-detail__year">Year: {poster.year}</p>
            </div>
        )}
        </>
    );
};

export default CardDetail;
