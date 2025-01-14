
//IMPORTACION
import React from "react";
import Navbar from "./navbar.jsx";
import Container from "./container.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//CONTENIDO (FUNCIONES, COMPONENTES, ETC)
const card = [
	{
		image: "https://aderezo.mx/wp-content/uploads/2022/08/1-arepa-rellena-123-444.jpg",
		title: "Arepas",
		description: "Ricas arepas al estilo pelua",
	},

	{
		image: "https://www.goya.com/media/4098/venezuelan-shredded-beef.jpg?quality=80",
		title: "Pabellon",
		description: "Delicioso plato tipico venezolano",
	},

	{
		image: "https://www.gourmet.cl/wp-content/uploads/2023/09/TEQUEN%CC%83OS.jpg",
		title: "Tequeños",
		description: "Rica entrada para compartir",
	},


	{
		image: "https://venemprende.shop/wp-content/uploads/2021/05/32.png",
		title: "Malta",
		description: "Bebida de los dioses",
	},

];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Container/>
			<div className="container">
				<div className="row">
					{card.map((item, index) => (
							<Card title={item.title} image={item.image} description={item.description} index={index} />
					))}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

//EXPORTACION
export default Home;
