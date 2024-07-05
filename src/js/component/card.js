import React from "react";
import "../../styles/card.css";

const Card = ({name, phone, email, address}) => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{phone}</p>
                <p className="card-text">{email}</p>
                <p className="card-text">{address}</p>
               
                
                <a href="#" className="btn btn-primary">Editar contacto</a>
            </div>
        </div>
    )
}
export default Card;