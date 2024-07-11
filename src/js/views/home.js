import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";



export const Home = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate()
	useEffect(() => {
		const fetchData = async () => {
			await actions.createUser();
			await actions.getContacts();


			console.log(store.contacts);
		}; fetchData();
	}, []);
	useEffect(() => {
		console.log(store.contacts);
	}, [store.contacts]);

	return (
		<div className="text-center mt-5">
			<button onClick={() => navigate("/addcontacts")}>Añadir contacto</button>
			<h2>Contactos</h2>
			{store.contacts.map((contact, index) => (<Card key={index} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} id={contact.id} />))}

		</div>

	)
}
