import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from './GalleryList/GalleryList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import 'typeface-roboto';

import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';


const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey
  }
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gallery: []
    }
  }


  componentDidMount() {
    //get gallery:
    this.getGallery();
  }



  getGallery = () => {
    console.log('in getPicItems');
    axios.get(`/gallery`)
      .then((response) => {
        console.log('here is response from getPicItems GET /gallery', response.data);
        this.setState({
          gallery: response.data
        })
        console.log(this.state.gallery);
      }).catch((err) => {
        console.log(err)
      });
  }//end getGallery


  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery Of My Life</h1>
        </header>
        <br />
          <GalleryList getGallery={this.getGallery} gallery={this.state.gallery}/>
      </div>
      </MuiThemeProvider>
    );
  }//end render

}//end App Component

export default App;
