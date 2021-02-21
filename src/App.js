import React from "react";
import axios from "axios";
import Movie from "./Movie";

//class 형태
class App extends React.Component{
  state = {
    //object
    isLoding: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data:{
        data:{
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false});
  };
  async componentDidMount(){
    this.getMovies(); 
  }
  render(){
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(movie => {
      console.log(movie);
      return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.poster} />
    })}</div>;
  }
}

export default App;
