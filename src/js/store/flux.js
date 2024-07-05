const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []

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
						setStore({ contacts: [...store.contacts, data] });
					})
					.catch(error => console.error("Error:", error));
			},

		}
	};
};

export default getState;
