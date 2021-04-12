import React, { Component } from 'react' 
import NewForm from './components/NewForm'
import BooktubeList from './components/BooktubeList'
import NYTbooks from './components/NYTbooks'
import Header from './components/Header'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://cryptic-lake-32777.herokuapp.com'
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
        <Header />
            <br/>
        <section className = 'section'>

            <NewForm handleAddBooks = {this.handleAddBooks}/>
        
              <br/>
              <aside>
                <BooktubeList />
              </aside>
              <br/>
              <section>
                <div>
                  <div>
                    <h2 className = 'notification is-link title is-3'>Book Recommendations</h2>
                    <br/>
                  </div>
                  
                  <div>
              
                    <div className = 'columns is-multiline '>

                      
                        {
                          this.state.books.map((book, key) => {
                            return (
                              <div key = {key} className = 'column is-one-third'>
                                <figure >
                                  <img src = { book.img } alt = 'book covers'></img>
                                </figure>
                                <br/> 
                                <div>
                                  <p className = 'subtitle'>
                                    { book.description } 
                                  </p>
                                </div>
                                
                            
                                <br/>
                                <button className = 'button' onClick ={() => this.deleteBook(book._id)}>Remove Book</button>
                                <br/>
                              </div>
                            )

                          })
                        }
                      
                    </div>
                    
                  </div>
                  
                </div>
              
            </section>
            <br/>
            <NYTbooks />
        </section>
    

      </div>
    )
  }
}

export default App;
