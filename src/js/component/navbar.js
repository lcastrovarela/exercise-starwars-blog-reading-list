import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="container">
					<div>
						<Link to="/">
							<span className="navbar-brand mb-0 h1">Star Wars</span>
						</Link>
					</div>
					<ButtonGroup aria-label="Basic example">
						<DropdownButton variant="primary" id="dropdown-basic-button" title="Favorites">
							{store.favlist.map((item, index) => {
								return (
									<Dropdown.Item key={index} href="">
										{item}{" "}
										<i className="far fa-trash-alt" onClick={() => actions.deleteItem(index)} />
									</Dropdown.Item>
								);
							})}
						</DropdownButton>
						<Button variant="secondary">{store.favlist.length}</Button>
					</ButtonGroup>
				</div>
			</nav>
		</>
	);
};
