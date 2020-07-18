import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Likenetflix – It's not, but close</title>
      </Helmet>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchToprated} />
      <Row
        title="Popular TV Shows"
        fetchUrl={requests.fetchTVpopular}
        isLargeRow
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Ramance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} isLargeRow />
      <Row
        title="Science Fiction Movies"
        fetchUrl={requests.fetchSciFiMovies}
      />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <div className="footer">
        <h4>&copy; Copynotright 2020</h4>
      </div>
    </div>
  );
}

export default App;
