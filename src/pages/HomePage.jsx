import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';


const HomePage = () => {
    const posters = useLoaderData();
    
    return (
    <>
    <div className="main-container">
        <img src='src\assets\images\fotopelis.jpg' className="fotopelis"/>
        <h1 className="title">GALERÍA</h1>
        <section>
        <Card posters={posters}/>
        </section>
    </div>
    </>
    )
}

export default HomePage
