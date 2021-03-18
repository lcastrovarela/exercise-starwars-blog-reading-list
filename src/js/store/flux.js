const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favlist: []
		},

		// Fetch de personajes y planetas, requiere doble fetch por particularidad en el Api
		actions: {
			fetchcharacter() {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						let list = [];
						result.results.forEach(element => {
							fetch(element.url)
								.then(response => response.json())
								.then(result2 => list.push(result2.result.properties))
								.catch(error => console.log("error", error));
						});

						setStore({ personajes: list });
					})
					.catch(error => console.log("error", error));
			},

			fetchplanets() {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => {
						let list = [];
						result.results.forEach(element => {
							fetch(element.url)
								.then(response => response.json())
								.then(result3 => list.push(result3.result.properties))
								.catch(error => console.log("error", error));
						});

						setStore({ planetas: list });
					})
					.catch(error => console.log("error", error));
			},

			// Agregar a la lista de Favoritos
			favFunction: name => {
				const store = getStore();
				const validate = store.favlist.includes(name);
				if (validate === false) {
					const favlist = [...store.favlist, name];
					setStore({ favlist: favlist });
				}
			},

			// Borrar de la lista de Favoritos
			deleteItem: indice => {
				let revisedList = getStore().favlist.filter((nombre, index) => index != indice);
				setStore({ favlist: revisedList });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                     fetch().then().then(data => setStore({ "foo": data.bar }))
                    */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
