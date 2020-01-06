import React, { Component } from 'react';

class Card extends Component {
	onClick = () => {
		let activeCard = this.props.id;

		if (this.props.activeCard === activeCard) {
			activeCard = -1;
		}
		this.props.setActive(activeCard);
	};

	remove = () => {
		this.props.filterCocktails(this.props.id);
	};

	render() {
		const { id, name, description, image, activeCard, isRemoveAllowed } = this.props;
		return <div className={`col-xs-12 col-sm-4 card-${id}`} key={id}>
			<h3>{name}</h3>
			<i className={`trash-bin show-${isRemoveAllowed} material-icons`} onClick={this.remove}>close</i>
			<div className={`card-canvas opened-card-${id === activeCard}`} onClick={this.onClick} >
				<div className={`card-canvas-inner`}>
					<div className="card-thumbnail">
						<img src={image} alt="cocktail" className="img-fluid"/>
					</div>
					<div className="card-article">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>;
	}
}
export default Card;