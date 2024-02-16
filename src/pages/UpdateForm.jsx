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
        <div>
            <h2>Edita tu póster</h2>
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
                <input type="submit" value="Añadir Póster" />
            </form>
        </div>
    );
};

export default UpdateForm;