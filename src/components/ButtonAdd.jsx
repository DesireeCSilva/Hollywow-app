import React from 'react';
import './ButtonAdd.css';
import { Link } from 'react-router-dom';
import CreateForm from '../pages/CreateForm';

const ButtonAdd = (url) => {
  return (
    <Link to="http://localhost:5173/create" className="button-add" url>Añadir póster</Link>
  )
}

export default ButtonAdd;