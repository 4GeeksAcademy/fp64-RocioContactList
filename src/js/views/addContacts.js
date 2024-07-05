import React from "react";
import "../../styles/addcontacts.css"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContacts = () => {
    const [nombreCompleto, setNombreCompleto] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [direccion, setDireccion] = useState("")
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.addContact(nombreCompleto, email, direccion, telefono)
        navigate("/")
    }


    return (
        <>
            <h1>Add Contacts</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre completo</label>
                    <input value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} type="text" class="form-control" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Teléfono</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="number" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">e-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Dirección</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
        </>

    )
}
export default AddContacts;
