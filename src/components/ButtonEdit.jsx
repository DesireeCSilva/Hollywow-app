import React from 'react';
import { Link } from 'react-router-dom';

const ButtonEdit = (url) => {
  return (
    <Link to= "`http://localhost:3000/posters/${id}`" className="button-edit" url>Editar póster</Link>
  )
}

export default ButtonEdit;