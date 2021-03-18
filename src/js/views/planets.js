import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const MyPlanets = () => {
	const { store, actions } = useContext(Context);
	const { planetsid } = useParams();

	return (
		<div className="container">
			<div className="card mb-3" style={{ height: "350px", maxWidth: "500px;" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="http://placehold.it/800x600.jpg" className="card-img-top" alt="Your image here!" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.planetas[planetsid].name}</h5>
							<p className="card-text">
								Tatooine is harsh desert world orbiting twin suns in the galaxys Outer Rim. In the days
								of the Empire and the Republic, many settlers scratched out a living on moisture farms,
								while spaceport cities such as Mos Eisley and Mos Espa served as home base for
								smugglers, criminals, and other rogues. Anakin Skywalker and Luke Skywalker both once
								called Tatooine home, and Obi-Wan Kenobi spent years in hiding there. Once known as a
								hive of scum and villainy, Tatooine has become quieter since the end of the Galactic
								Civil War.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div
					className="row"
					style={{ height: "200px", padding: "2px", marginTop: "30px", color: "red", textAlign: "center" }}>
					<div className="col-sm">
						Name
						<br />
						{store.planetas[planetsid].name}
					</div>
					<div className="col-sm">
						Climate
						<br />
						{store.planetas[planetsid].climate}
					</div>
					<div className="col-sm">
						Population
						<br />
						{store.planetas[planetsid].population}
					</div>
					<div className="col-sm">
						Orbital period
						<br />
						{store.planetas[planetsid].orbital_period}
					</div>
					<div className="col-sm">
						Rotation period
						<br />
						{store.planetas[planetsid].rotation_period}
					</div>
					<div className="col-sm">
						Diameter
						<br />
						{store.planetas[planetsid].diameter}
					</div>
				</div>
			</div>
		</div>
	);
};
