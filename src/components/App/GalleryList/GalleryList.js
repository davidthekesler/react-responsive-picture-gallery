import React, { Component } from 'react';
import GalleryItem from './GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {

        let galleryArray = this.props.gallery.map((pic) => {
            return (
                <GalleryItem getGallery={this.props.getGallery} key={pic.id} pic={pic}/>
            )
        });

        return (
            <div>
                {galleryArray}
            </div>
        )
    }//end render


}//end GalleryList


export default GalleryList;