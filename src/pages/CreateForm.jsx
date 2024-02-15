import React from 'react';
import { useForm } from "react-hook-form";
import { createPoster } from '../services/posterServices'; 

const CreateForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (newPoster) => {
        await createPoster(newPoster);
    };

    return (
        <div>
            <h2>Añade un nuevo póster</h2>
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

export default CreateForm;