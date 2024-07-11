import EditContacts from "../views/editContacts";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			editContact: {}

		},
		actions: {
			createUser: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Rocio", {
					method: "POST",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.error("Error:", error));
			},

			addContact: (name, email, address, phone) => {
				fetch("https://playground.4geeks.com/contact/agendas/Rocio/contacts", {
					method: "POST",
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address,

					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.error("Error:", error));
			},
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Rocio/contacts")
					.then(response => response.json())
					.then(data => {
						const store = getStore();
						setStore({ contacts: data.contacts });
					})
					.catch(error => console.error("Error:", error));
			},
			deleteUser: (id) => {
				const actions = getActions();
				fetch(`https://playground.4geeks.com/contact/agendas/Rocio/contacts/${id}`, {
					method: "DELETE",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.ok) {
							actions.getContacts();

						}
					})
					.then(data => {
						console.log(data);

					})
					.catch(error => console.error("Error:", error));
			},
			editContacts: (name, email, address, phone, id) => {
				console.log(name, email, address, phone, id)
				fetch(`https://playground.4geeks.com/contact/agendas/Rocio/contacts/${id}`, {
					method: "PUT",
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address,

					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.error("Error:", error));
			},
			singleContact: (id) => {
				const store=getStore();
				const contact = store.contacts.filter(contact => contact.id === id);
				setStore({ editContact: contact });}


		}
	};
};

export default getState;
