import React from 'react';
import '../components/ButtonEdit.css'
import { Link } from 'react-router-dom';


const ButtonEdit = (url) => {
  return (
    <Link to= {`http://localhost:5173/update/${id}`} className="button-edit" url={id.toString()}>Editar póster</Link>
  );
};

export default ButtonEdit;