import React, { Component } from 'react';

class Aside extends Component {

	render() {
		return <aside className="cards-aside">
			<i className="material-icons" onClick={this.props.reset} title="Refresh">cached</i>
			<i className="material-icons" onClick={this.props.shuffle} title="Shuffle">shuffle</i>
		</aside>
	}
}

export default Aside;