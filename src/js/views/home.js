import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { MyCard } from "../component/card.js";
import { MyPlanet } from "../component/planets.js";
import { Context } from "../store/appContext";

export function Home() {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);

	setInterval(() => {
		store.personajes.length > 0 ? setCargo(true) : "";
	}, 2000);

	return (
		<div className="container">
			<h1 className="text-left">Personajes</h1>
			{cargo ? (
				<div className="d-flex flex-row" style={{ width: "100%", overflow: "auto" }}>
					{store.personajes.map((item, index) => {
						return (
							<div key={index}>
								<MyCard
									name={store.personajes[index].name}
									gender={store.personajes[index].gender}
									haircolor={store.personajes[index].hair_color}
									eyecolor={store.personajes[index].eye_color}
									position1={index}
								/>
							</div>
						);
					})}
				</div>
			) : (
				""
			)}

			<h1 className="text-left">Planetas</h1>
			{cargo ? (
				<div className="d-flex flex-row" style={{ width: "100%", overflow: "auto" }}>
					{store.planetas.map((item, index) => {
						return (
							<div key={index}>
								<MyPlanet
									name={store.planetas[index].name}
									population={store.planetas[index].population}
									terrain={store.planetas[index].terrain}
									position2={index}
								/>
							</div>
						);
					})}
				</div>
			) : (
				""
			)}
		</div>
	);
}
