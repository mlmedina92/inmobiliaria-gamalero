import React from 'react';
import logo from '../img/logo.png';

const Equipo = () => {
  return (
    <div classNameName="card-group equipo">
    <div className="card">
      <img src={logo} width="200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div className="card">
      <img src={logo} width="200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This card has supporting text below as a natural lead-in to
          additional content.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div className="card">
      <img src={logo} width="200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Juan Gamalero</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This card has even longer content
          than the first to show that equal height action.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>  )
}

export default Equipo