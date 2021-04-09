import React, { Component } from 'react';

class NYTbooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
        // this.getBestsellers = this.getBestsellers.bind(this)
    }

    componentDidMount() {
        this.getBestsellers()
    }

    getBestsellers() {
        fetch('https://cryptic-lake-32777.herokuapp.com/books/bestsellers')
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
                <section>
                    <div className = 'title is-4'>
                        <h2>New York Times Bestsellers List</h2>
                    </div>
                    <div className = 'columns is-multiline'>
                        {
                            this.state.books.map((book, key) => {
                                return (
                                    <div key = {key} className = 'column is-one-third'>
                                        <figure>
                                            <img src = { book.book_image} alt = {book.title}></img>
                                        </figure>
                                        <br/>
                                        <div>
                                            <p className = 'subtitle'>
                                                { book.description }
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>

            
        )
    }
}

export default NYTbooks