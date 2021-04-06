import React, { Component } from 'react' 

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    };
    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks()
  };

  getBooks() {
    fetch(baseURL + '/books')
    .then(data => {
      return data.json()},
      err => console.log(err))
      .then(json => this.setState({books:json}),
      err => console.log(err))
  }

  render() {
    return (
      <div>
      
        <header>
          <h1>Booksnob</h1>
        </header>
  
        <br/>
        <ul>
          {
            this.state.books.map((book, key) => {
              return <li key = {key}> { book.img } | { book.description }</li>
            })
          }
        </ul>

      </div>
    )
  }
}

export default App;
