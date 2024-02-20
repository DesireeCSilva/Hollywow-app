import React from 'react';
import '../components/ButtonEdit.css'
import { Link } from 'react-router-dom';


const ButtonEdit = ({id}) => {
  return (
    <Link to= {`/update/${id}`} className="button-edit">EDITAR</Link>
  );
};

export default ButtonEdit;