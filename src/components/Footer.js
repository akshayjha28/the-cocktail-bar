import React from 'react';

const GITHUB = `https://github.com/akshayjha28/the-cocktail-bar`;

const Footer = () => {
	return <div style={{ background: `white`, padding: `8px`, textAlign: `center` }}>
		<a style={{ margin: `0 auto`, fontSize: `16px` }} href={GITHUB}>© Akshay Jha</a>
	</div>
};

export default Footer;