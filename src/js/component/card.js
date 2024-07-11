import React from "react";
import "../../styles/card.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = ({name, phone, email, address, id}) => {
    const { store, actions } = useContext(Context)
    return (
        <div className="card">
            <img style={{width:"18rem"}} src="https://img.freepik.com/foto-gratis/peluqueria-femenina-pasar-buen-rato-trabajo-foto-estudio-atractiva-mujer-moderna-peinado-bollo-dedos-cerca-labios-sonriendo-ampliamente-mientras-mira-lado-hablando-companero-trabajo_176420-13869.jpg?ga=GA1.1.400438198.1718467393&semt=ais_user" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{phone}</p>
                <p className="card-text">{email}</p>
                <p className="card-text">{address}</p>
               
                
                <Link to="/editcontacts"onClick={()=>actions.singleContact(id)} className="btn btn-primary">Editar contacto</Link>
                <a href="#" onClick={()=>actions.deleteUser(id)} className="btn btn-primary">Borrar contacto</a>
            </div>
        </div>
    )
}
export default Card;