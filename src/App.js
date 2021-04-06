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
    this.handleAddBooks = this.handleAddBooks.bind(this);
    this.handleChange = this.handleChange(this);
    this.handleSubmit = this.handleSubmit(this);
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

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ [event.target.id]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event)

    fetch(baseURL + '/books/' + book._id, {
      method: 'PUT',
      body: JSON.stringify({
        img: '',
        description: ''
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then(resJson => {
        const copyBooks = [...this.state.books]
        const findIndex = this.state.books.findIndex(book => 
          book._id === resJson._id)
          copyBooks [findIndex] = resJson
          this.setState({books: copyBooks})
      })
  }

  render() {
    return (
      <div>
      
        <header>
          <h1>Booksnob</h1>
        </header>
      <br/>

      <form onSubmit = { this.handleSubmit }>
        <input type = 'text' name = 'img' id = 'img' onChange = {this.handleChange} placeholder = 'Add image' value = {this.state.img} />
        <label htmlFor = 'img'> Book Cover Image</label>
        <input type ='text' name = 'description' id = 'description' onChange = { this.handleChange } placeholder = 'Add description' value = { this. state. description } />
        <label htmlFor = 'description'>Description</label>
        <input type = 'submit' value = 'Add Book' />
      </form>
  
        <br/>
        <h2>Book Recommendations</h2>
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
