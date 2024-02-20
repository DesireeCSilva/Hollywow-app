import { useState, useEffect }  from 'react';
import { useForm } from "react-hook-form";
import { updatePoster, getOnePoster } from '../services/posterServices'; 
import { useParams} from 'react-router';

const UpdateForm = () => {
    const {id} = useParams(); // Para obtener la id de la URL
    const { register, handleSubmit, reset, setValue, watch } = useForm();
    const [loading, setLoading] = useState(false);
    const [posterData, setPosterData] = useState();

    useEffect(() => {
        const fetchData  = async () => {
            const posterData = await getOnePoster(id);
            setPosterData(posterData);

            setValue('imageUrl', posterData.imageUrl),
            setValue('name', posterData.name),
            setValue('director', posterData.director),
            setValue('year', posterData.year)
        };

        fetchData();
    }, [id, setValue])

    //const onSubmit = async (editedPoster) => {
        //setLoading(true);
        //await updatePoster(id, editedPoster);
        //alert('¡Los datos del elemento han sido actualizados correctamente!');
        //reset();
        //setLoading(false);
    //};
    const onSubmit = async (editedPoster) => {
        console.log('Póster editado:', editedPoster);
        setLoading(true);
        try {
            await updatePoster(id, editedPoster);
            alert('¡Los datos del elemento han sido actualizados correctamente!');
            reset();
        } catch (error) {
            console.error('Error al actualizar el póster:', error);
        } finally {
            setLoading(false);
        }
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
                <input type="submit" value="Editar Póster" />
            </form>
        </div>
    );
};

export default UpdateForm;