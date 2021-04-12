import React, { Component } from 'react'

let baseURL = ''

if(process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003'
} else {
    baseURL = 'https://cryptic-lake-32777.herokuapp.com'
};

class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img : '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value})
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(baseURL)

        fetch(baseURL + '/books', {
            method: 'POST',
            body: JSON.stringify({
                img: this.state.img,
                description: this.state.description
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(resJson => {
                console.log(resJson)
                this.props.handleAddBooks(resJson)
                this.setState({
                    img: '',
                    description: ''
                });
            }).catch (error => console.error({'Error': error}))
    };

    render () {
        return(
            <div>
                <section>
                    <div>
                        <h2 className ='is-size-4'>Add Your Favorite Book</h2>
                    </div>
                    <div>
                        <form onSubmit = {this.handleSubmit}>
                            <label htmlFor = 'img' className = 'label'> Book Cover Image</label>
                            <div className = 'control'>
                                <input className ='input' size ='5' type = 'text' name = 'img' id = 'img' onChange = {this.handleChange} placeholder = 'Add image' value = {this.state.img} />
                            </div>
                            <label htmlFor = 'description' className = 'label'>Description</label>
                            <div className = 'control'>
                                
                                <textarea className='textarea' type ='text' name = 'description' id = 'description' onChange = { this.handleChange } placeholder = 'Add description' value = { this. state. description }></textarea>
                            </div>
                            <br/>
                            <input className ='button is-link' type = 'submit' value = 'Add Book' />
                        </form>
                    </div>
                    
                </section>
                
            </div>
        )
    };
};

export default NewForm