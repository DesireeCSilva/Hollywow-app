import React from 'react';
import { useForm } from "react-hook-form";
import { createPoster } from '../services/posterServices'; 

const CreateForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (newPoster) => {
        await createPoster(newPoster);
    };

    return (
        <div className='formAdd'>
            <div>
                <img src="../src/assets/images/Añade-pelicula.png" className='Añade'></img> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className='image'>Imagen</label>
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
                    <input type="text" {...register('year', { required: true })} />
                </div>
                <input className="buttonAdd" type="submit" value="Añadir" />
            </form>
        </div>
    );
};

export default CreateForm; 