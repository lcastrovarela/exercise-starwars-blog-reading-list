import React, { useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const MyCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card col" style={{ padding: "0px", margin: "10px", minWidth: "400px", maxWidth: "400px" }}>
				<img src="http://placehold.it/400x200.jpg" className="card-img-top" alt="Your image here!" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p>
						Gender: {props.gender}
						<br />
						Hair color: {props.haircolor}
						<br />
						Eye color: {props.eyecolor}
					</p>
					<row>
						<Link to={"/characters/" + props.position1}>
							<a href="#" className="btn btn-outline-primary">
								Learn more!
							</a>
						</Link>
						<a
							href="#"
							className="btn btn-outline-warning"
							style={{ float: "right" }}
							onClick={() => actions.favFunction(props.name)}>
							<i className="far fa-heart" />
						</a>
					</row>
				</div>
			</div>
		</div>
	);
};

MyCard.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	haircolor: PropTypes.string,
	eyecolor: PropTypes.string,
	position1: PropTypes.number
};
