import React from "react";
import { Button } from "./button.jsx";

export const Cards = props => {
	let myCardsContent = [
		{
			imgUrl:
				"https://images.pexels.com/photos/2710063/pexels-photo-2710063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			cardTitle: "MAKE UP",
			cardDescription:
				"Whether you are looking for palettes to make a full color makeup, or if you need products for day today, right here we have a selection of the best-selling ones in the world."
		},
		{
			imgUrl:
				"https://images.pexels.com/photos/4636/person-woman-eyes-face.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			cardTitle: "SKINCARE",
			cardDescription: "Skincare text"
		},
		{
			imgUrl:
				"https://images.pexels.com/photos/4813343/pexels-photo-4813343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			cardTitle: "NAILS",
			cardDescription: "Nails text"
		},
		{
			imgUrl:
				"https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			cardTitle: "HAIRCARE",
			cardDescription: "Haircare text"
		}
	];
	let mapFunction = myCardsContent.map((item, index) => {
		return (
			<div className="card m-1" key={index}>
				<img
					src={item.imgUrl}
					className="card-img-top p-0"
					alt="Image"
				/>
				<div className="card-body">
					<h5 className="card-title">{item.cardTitle}</h5>
					<p className="card-text">{item.cardDescription}</p>
					<Button textButton="See more" classContent="btn" />
				</div>
			</div>
		);
	});
	return (
		<div className="d-flex justify-content-center">
			<div className="cardsContainer d-flex justify-content-center p-0 m-0">
				{/* CARDS */}
				{mapFunction}
			</div>
		</div>
	);
};
