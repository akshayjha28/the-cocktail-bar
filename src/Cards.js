import React, { Component } from 'react';
import Card from './components/Card';
import Aside from "./components/Aside";

class Cards extends Component {
	constructor(props) {
		super(props);
		const { cocktails } = props;
		this.state = { cocktails, activeCard: -1 };
	}

	filterCocktails = (discarded) => {
		const cocktails = this.state.cocktails.filter(cocktail => cocktail.id !== discarded);
		this.setState({ cocktails });
	};

	reset = () => {
		this.setState({ cocktails: this.props.cocktails });
	};

	shuffle = () => {
		const cocktails = this.state.cocktails.sort(() => Math.random() - 0.5);
		this.setState({ cocktails });
	};

	setActive = (activeCard) => {
		this.setState({ activeCard });
	};

	renderChildren = () => {
		return this.state.cocktails.map(cocktail => {
			const { id } = cocktail;
			return <Card {...{
				key: id,
				...cocktail,
				activeCard: this.state.activeCard,
				setActive: this.setActive,
				filterCocktails: this.filterCocktails,
				isRemoveAllowed: this.state.cocktails.length > 1
			}}/>;
		});
	};

	render() {
		return <>
			<Aside {...{ reset: this.reset, shuffle: this.shuffle }}/>
			<div className="cards">
				<div className="container">
					<div className="row">
						{this.renderChildren()}
					</div>
				</div>
			</div>
		</>
	}
}

export default Cards;