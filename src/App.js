import React, { Component } from 'react' 
import NewForm from './components/NewForm'
import BooktubeList from './components/BooktubeList'
import NYTbooks from './components/NYTbooks'

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
    this.handleAddBooks = this.handleAddBooks.bind(this);
    
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

  handleAddBooks(book) {
    const copyBooks = [...this.state.books]
    copyBooks.unshift(book)
    this.setState({
      books: copyBooks
    })
  }

  deleteBook(id) {
    console.log('deleting a book')

    fetch(baseURL + '/books/' + id, {
      method: 'DELETE'
    }).then(res => {
      const findIndex = this.state.books.findIndex(book =>
        book._id === id)
        const copyBooks = [...this.state.books]
        copyBooks.splice(findIndex, 1)
        this.setState({books: copyBooks})
    });
  };

  render() {
    return (
      <div>
      
        <header>
          <h1>Booksnob</h1>
        </header>
      <br/>

      <NewForm handleAddBooks = {this.handleAddBooks}/>
  
        <br/>
        <aside>
          <BooktubeList />
        </aside>
        <br/>
        <h2>Book Recommendations</h2>
        <ul>
          {
            this.state.books.map((book, key) => {
              return <li key = {key}> 
              <img src = { book.img } alt = 'book covers'></img> <br/> 
              { book.description } 
              <br/>
              <button onClick ={() => this.deleteBook(book._id)}>DELETE BOOK</button>
              <br/>
              </li>
            })
          }
        </ul>
        <br/>
        <NYTbooks />

      </div>
    )
  }
}

export default App;
