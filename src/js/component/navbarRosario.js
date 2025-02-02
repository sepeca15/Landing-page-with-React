import React from "react";
import PropTypes from "prop-types";

export const Navbar = () => {
	return (
		<div
			nav
			className="navbar navbar-expand-lg navbar-light bg-dark container">
			<nav>
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarTogglerDemo02">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit">
							Contacts
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};
