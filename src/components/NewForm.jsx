import React, { Component } from 'react'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003'
} else {
    baseURL = 'your herokubackend url here'
}

class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img : '',
            description: ''
        }
    }
    render () {
        return(
            <div>
                <h2>Add Your Favorite Book</h2>
                <form onSubmit = { this.handleSubmit }>
                    <input type = 'text' name = 'img' id = 'img' onChange = {this.handleChange} placeholder = 'Add image' value = {this.state.img} />
                    <label htmlFor = 'img'> Book Cover Image</label>
                    <input type ='text' name = 'description' id = 'description' onChange = { this.handleChange } placeholder = 'Add description' value = { this. state. description } />
                    <label htmlFor = 'description'>Description</label>
                    <input type = 'submit' value = 'Add Book' />
                </form>
            </div>
        )
    }
}

export default NewForm