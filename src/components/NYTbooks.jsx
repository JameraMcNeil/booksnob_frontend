import React, { Component } from 'react';
import env from 'react-dotenv'



class NYTbooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
        this.getBestsellers = this.getBestsellers.bind(this)
    }


    getBestsellers() {
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
        .then(res => {
            return res.json()},
            err => console.log(err))
        .then((json) => this.setState({books: json.results.books}), 
        err => console.log(err))
    }


    render() {
        // this.getBestsellers()
        // console.log(process.env.REACT_APP_BOOKS_API_KEY)
        return(
            <div>
                <h2>New York Times Bestsellers List</h2>
            <button onClick={this.getBestsellers}>TAP</button>
            

            </div>
            
        )
    }
}

export default NYTbooks