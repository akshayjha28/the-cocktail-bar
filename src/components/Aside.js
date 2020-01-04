import React, { Component } from 'react';

class Aside extends Component {

	render() {
		return <aside className="cards-aside">
			<img src="https://img.icons8.com/officel/40/000000/refresh.png" onClick={this.props.reset} alt="refresh"/>
			<img src="https://img.icons8.com/office/40/000000/shuffle.png" onClick={this.props.shuffle} alt="shuffle"/>
		</aside>
	}
}

export default Aside;