import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

//import "../../styles/home.scss";

export const MyCharacters = () => {
	const { store, actions } = useContext(Context);
	const { charactersid } = useParams();

	return (
		<div className="container">
			<div className="card mb-3" style={{ height: "350px", maxWidth: "500px;" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="http://placehold.it/800x600.jpg" className="card-img-top" alt="Your image here!" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.personajes[charactersid].name}</h5>
							<p className="card-text">
								Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of
								the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and
								Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended
								the tyranny of the Sith. A generation later, the location of the famed Jedi master was
								one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced
								the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas
								for help. But his solitude would be interrupted – and Luke Skywalker had one final,
								momentous role to play in the struggle between good and evil.
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
						{store.personajes[charactersid].name}
					</div>
					<div className="col-sm">
						Birthyear
						<br />
						{store.personajes[charactersid].birth_year}
					</div>
					<div className="col-sm">
						Gender
						<br />
						{store.personajes[charactersid].gender}
					</div>
					<div className="col-sm">
						Height
						<br />
						{store.personajes[charactersid].height}
					</div>
					<div className="col-sm">
						Skin color
						<br />
						{store.personajes[charactersid].skin_color}
					</div>
					<div className="col-sm">
						Eye color
						<br />
						{store.personajes[charactersid].eye_color}
					</div>
				</div>
			</div>
		</div>
	);
};
