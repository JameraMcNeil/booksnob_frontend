import React, { Component } from 'react'

class Header extends Component {
    render() {
        return(
            <div>
                <section className = 'hero is-link'>
                    <div className = 'hero-body'>
                        <header>
                            <h1 class = 'title'>Booksnob</h1>
                        </header>
                    </div>
                </section>
            </div>
        )
    }
}

export default Header