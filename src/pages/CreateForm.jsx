import React from 'react';
import { useForm } from "react-hook-form";

const CreateForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
	
    return <div>
        <h2>Añade un nuevo póster</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div>
                <img></img>
                <input type="url" {...register('image')} />
            </div> */}
            
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required:true,
                    maxLenght: 40
                    }
                )}/>
            </div>
            <div>
                <label>Director</label>
                <input type="text" {...register('director')} />
            </div>
            <div>
                <label>Año</label>
                <input type="text" {...register('año')} />
            </div>
        <input type="submit" value="Añadir"/>
        </form>
	</div>
}

export default CreateForm;
