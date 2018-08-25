import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Genre: ""
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.playMusic =  this.playMusic.bind(this);
    
  }
  componentDidMount(){
   
   
  }
   handleSearch(genre) {

    this.setState({
      Genre: genre
    })
    console.log(genre);

    // let search = this.state.Genre;

    //  let url = ("https://itunes.apple.com/search?term=" + search)

    // fetch(url)
    //     .then(function(response){

    //       response.json().then(function(data){
    //       console.log(data.resultCount);
    //       console.log(data);
    //       let randomSelector = Math.floor(Math.random() * Math.floor(50));
          
    //       let player = document.getElementById('music-player');
    //       let musicPreview = data.results[randomSelector].previewUrl;
    //       console.log(musicPreview);
    //              player.setAttribute('src', musicPreview);
    //              player.play();
    //     })
    //     })
    if(genre){
    this.playMusic(genre);
  }




  }
  playMusic(genre){
    console.log(this.state.Genre + "2");
     let search = genre;

     if(search){

     let url = ("https://itunes.apple.com/search?term=" + search)

    fetch(url)
        .then(function(response){

          response.json().then(function(data){
          console.log(data.resultCount);
          console.log(data);
          let randomSelector = Math.floor(Math.random() * Math.floor(50));
          
          let player = document.getElementById('music-player');
          let musicPreview = data.results[randomSelector].previewUrl;
          console.log(musicPreview);
                 player.setAttribute('src', musicPreview);
                 player.play();
        })
        })
      }
  }

                



  render() {
    return (
      <div id="container">
      <div id="Header">
      <h1 id = "Title">Music App!</h1>
       <section class="player">
      <audio id="music-player" controls="controls" src=""></audio>
    </section>
      </div>
      <div id="Genres">
      <div id="country"   onClick={() => { this.handleSearch("country") }} >
      <img src='https://static.thenounproject.com/png/96504-200.png'/>
      <h1>Country </h1>  
      
      </div>
      <div id="rock"   onClick={() => { this.handleSearch("rock") }}>
      <img src='https://png.icons8.com/metro/1600/guitar.png'/>
      <h1>Rock</h1>   
      
      </div>
      <div id="jazz"   onClick={() => { this.handleSearch("jazz") }}>
      <img src="http://icons.iconarchive.com/icons/icons8/ios7/256/Music-Saxophone-icon.png"/>
      <h1>Jazz</h1> 
      
      </div>
      <div id="rap"   onClick={() => { this.handleSearch("rap") }}>
      <img src="https://cdn2.iconfinder.com/data/icons/people-3-2/128/Rapper-Rap-Musician-Hip-Hop-Urban-Man-512.png"/>
      <h1>Rap</h1> 
      
      </div>

      </div>
      </div>
    );
  }
}

export default App;
