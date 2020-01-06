import React from 'react';
import './footer.scss';

const GITHUB = `https://github.com/akshayjha28/the-cocktail-bar`;

const Footer = () => {
	return <div className="cocktail-footer">
		<a href={GITHUB}>© Akshay Jha</a>
	</div>
};

export default Footer;