import React from 'react';
import { useForm } from "react-hook-form";
import { updatePoster } from '../services/posterServices'; 
import { onePoster } from '../services/posterServices';

const UpdateForm = () => {
    const { register, handleSubmit } = useForm();

    const onePoster = () => {
      
    }

    const onSubmit = async (editPoster) => {
        await updatePoster(editPoster);
    };

    return (
        <div className="editForm">
            <div>
                <img src="../src/assets/images/edita.png" className='Edita'></img> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Imagen</label>
                    <input type="url" {...register('imageUrl', { required: true })} />
                </div>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('name', { required: true, maxLength:  40 })} />
                </div>
                <div>
                    <label>Director</label>
                    <input type="text" {...register('director', { required: true })} />
                </div>
                <div>
                    <label>Año</label>
                    <input type="number" {...register('year', { required: true })} />
                </div>
                <input className="EditPosterButton" type="submit" value="Editar Póster" />
            </form>
        </div>
    );
};

export default UpdateForm;