import React, { Component } from 'react';
import axios from 'axios';

class Books extends Component {
	state = {
		books: [],
		text: 'Lord of the Rings'
	};

	componentDidMount() {
		// Make a request for a user with a given ID
		axios
			.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.text)
			.then(function(response) {
				// handle success
				console.log(response);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.finally(function() {
				// always executed
			});
	}

	handleChange(text) {
		this.setState(
			{
				text: text
			},
			this.getBooks()
		);
	}

	render() {
		return (
			<div>
				<ul> {this.state.books.map((books) => <li> {books.data.id} </li>)} </ul>
			</div>
		);
	}
}

export default Books;
