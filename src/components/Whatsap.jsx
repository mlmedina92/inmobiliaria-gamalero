import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/whatsapp.scss';

const Whatsapp = () => {
  return (
<Link className="text-reset fixed-btn" target="_blank" rel='noreferrer noopeper' to="https://wa.me/5492494544221"><i
      className="bi bi-whatsapp"></i></Link>  )
}
export default Whatsapp;