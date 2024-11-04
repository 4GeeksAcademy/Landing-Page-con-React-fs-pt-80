import React from "react";

const Jumbotron = () => {
	return (
		<div className="container"> {/* Contenedor para igualar ancho */}
			<div className="jumbotron" style={{ 
				backgroundColor: "#f8f9fa", // Gris claro
				padding: "2rem 3rem",       // Espacio interior
				margin: "2rem 0",           // Margen vertical
				borderRadius: "0.5rem"      // Bordes redondeados (opcional)
			}}>
				<h1 className="display-4">Welcome to our Landing Page!</h1>
				<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</div>
		</div>
	);
};

export default Jumbotron;