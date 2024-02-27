import React from 'react'
import '../components/ButtonDetail.css'
import { Link } from 'react-router-dom'

const ButtonDetail = ({id}) => {
  return (
    <Link to= {`/card/${id}`} className="button-detail">+ INFO</Link>
  );
};

export default ButtonDetail;