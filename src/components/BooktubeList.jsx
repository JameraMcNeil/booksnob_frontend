import React, { Component } from 'react'

class BooktubeList extends Component {
    render() {
        return(
            <div>
                <section>
                    <div className = 'columns'>
                        <div className = 'column is-narrow'>
                            <div className = 'box'>
                                <p className = 'title is-4'>Booktubers to Follow:</p>
                                <br/>
                                <p className = 'subtitle'><a href = 'https://www.youtube.com/channel/UCpC_4ZZjQqjXnxYGy35CFzw' target = '_blank' rel='noreferrer'>Left on Read</a></p>
                                
                                <p className = 'subtitle'><a href = 'https://www.youtube.com/user/PeruseProject' target = '_blank' rel='noreferrer'>Peruse Project</a></p>
                                
                                <p className = 'subtitle'><a href = 'https://www.youtube.com/user/TheNewGirl007' target = '_blank' rel='noreferrer'>Alexandria The Great</a></p>
                                
                                <p className = 'subtitle'><a href = 'https://www.youtube.com/user/sunbeamsjess' target = '_blank' rel='noreferrer'>Sunbeams Jess</a></p>
                                
                                <p className = 'subtitle'><a href = 'https://www.youtube.com/channel/UC9wGRQa-JiXIbwjGDl5SSgw' target = '_blank' rel='noreferrer'>By Amber Burns</a></p>
                                
                                <p className = 'subtitle'><a href = 'https://www.youtube.com/channel/UCMlBZSkLgZFxotyzSIJNfBQ' target = '_blank' rel='noreferrer'>Pretty x Bookish</a></p>
                            </div>
                        
                        </div>
                        <div className = 'column'></div>
                        <div className = 'column is-6'>
                            <div className = 'box'>
                                <p className = 'title is-4'>Booktube Playlist</p>
                                <figure className = 'playlist'>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UBeYlCuGbf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <br/>
                    
                </section>
                
            </div>
        )
    }
}

export default BooktubeList;