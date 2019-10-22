import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

let shortUrl = '';
let longUrll = '';

export default function Popup() {
	const longInput = (e) => {
		longUrll = e.target.value;
		console.log(longUrll);
	};

	const shortner = () => {
		console.log('called');
		axios
			.post('http://localhost:5000/api/url/shorten', {
				longUrl: longUrll
			})
			.then((res) => {
				console.log(longUrll);
				shortUrl = res.data.shortUrl;
				console.log(shortUrl);
				const showUrl = React.createElement('h1', {}, `Copy those ${shortUrl}`);
				ReactDOM.render(showUrl, document.getElementById('global'));
			})
			.catch((error) => {
				console.error('something went wrong');
			});
	};

	return (
		<div>
			<div className="wrap">
				<div className="short">
					<input type="text" className="shortTerm" placeholder="Add your url here" onChange={longInput} />
					<button type="submit" onClick={shortner} className="shortButton">
						Go
					</button>
				</div>
				<h5>ShortUrl apperas here {shortUrl}</h5>
			</div>
		</div>
	);
}
