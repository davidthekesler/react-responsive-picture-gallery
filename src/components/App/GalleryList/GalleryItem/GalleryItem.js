import React, { Component } from 'react';
import './GalleryItem.css';
import axios from 'axios';
import Button from 'material-ui/Button';
// import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardText, CardMedia } from 'material-ui/Card';
import { Typography } from 'material-ui';
import { Favorite } from 'material-ui-icons';
// import Icon from 'material-ui-icon';

class GalleryItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShown: true
        }//end this.state

        this.handleLike = this.handleLike.bind(this);
    }//end GalleryItem constructor

    handleLike = () => {
        axios.put(`/gallery/like/${this.props.pic.id}`, this.props.pic)
            .then((response) => {
                console.log('here is response from axios.put gallery/like', response.data);
                this.props.getGallery();

            }).catch((err) => {
                console.log(err)
            });
    }//end handleLike

    handleShown = () => {
        this.setState({
            isShown: !this.state.isShown
        })
        console.log(this.state.isShown);
    }//end handleShown

    render() {

        if (this.state.isShown && (this.props.pic.likes === 0)) {
            return (
                <Card style={{ float: "left", width: '120px', height: '150px', padding: '10px', margin: '10px' }}>
                    <img onClick={this.handleShown} style={{ height: '100px' }} src={this.props.pic.path} />
                    <p style={{ color: "#424242" }}>{this.props.pic.likes} <Favorite color="secondary" onClick={this.handleLike} /></p>
                </Card>
            )
        } else if
        (this.state.isShown && (this.props.pic.likes > 0)) {
            return (
                <Card style={{ float: "left", width: '120px', height: '150px', padding: '10px', margin: '10px' }}>
                    <img onClick={this.handleShown} style={{ height: '100px' }} src={this.props.pic.path} />
                    <p style={{ color: "red" }}>{this.props.pic.likes} <Favorite color="primary" onClick={this.handleLike} /></p>
                </Card>
            )
        } else {
            return (
                <Card style={{ float: "left", width: '120px', height: '150px', padding: '10px', margin: '10px' }}
                    onClick={this.handleShown}>
                    <CardContent>
                        {/* <Typography component="p"> */}
                        <p>{this.props.pic.description}</p>
                        {/* </Typography> */}
                    </CardContent>
                </Card>
            )
        }//end return conditional

    }//end render

}//end GalleryItem

export default GalleryItem;