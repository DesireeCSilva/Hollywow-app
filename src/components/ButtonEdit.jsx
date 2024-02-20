import React from 'react';
import { Link } from 'react-router-dom';

const ButtonEdit = ({ id }) => {
  return (
    <Link to= {`http://localhost:5173/update/${id}`} className="button-edit">Editar póster</Link>
  );
};

export default ButtonEdit;