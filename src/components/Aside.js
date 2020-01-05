import React  from 'react';

const Aside = (props) => {

	return <aside className="cards-aside">
		<i className="material-icons" onClick={props.reset} title="Refresh">cached</i>
		<i className="material-icons" onClick={props.shuffle} title="Shuffle">shuffle</i>
	</aside>
};

export default Aside;