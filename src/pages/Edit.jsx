useEffect(() => {
    const fetchData  = async () => {
        const posterData = await getOnePoster(id);
    }

    fetchData();

setPosterData(posterData);

    setValue('image', posterData.imageUrl),
    setValue('name', posterData.name),
    setValue('director', posterData.director),
    setValue('year', posterData.year)

}, [id, setValue])

const onSubmit = async (data) => {
setLoading(true);
await updatePoster(id, data);
alert('¡Los datos del elemento han sido actualizados correctamente!');
reset();
setLoading(false);
};