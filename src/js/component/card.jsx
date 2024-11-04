import React from "react";

const Card = (props) => {
	return (
		<div className="col-md-3">
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.imageUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Titulo de la carta</h5>
					<p className="card-text">Esto seería una pequeña descripción de la carta. En el cual pondríamo su contenido y otras cosas.......</p>
					<a href="#" className="btn btn-primary">Click para más</a>
				</div>
			</div>
		</div>
	);
};

export default Card;