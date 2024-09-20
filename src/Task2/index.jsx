import React from "react";
import logo from "../logo.svg";
import MovieCard from "./MovieCard";

function Movie() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const inputRef = React.useRef("");

  const apiCall = async (res) => {
    setLoading(true);
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${res}`,
        { method: "GET" }
      );
      if (response?.ok) {
        let json = await response.json();
        if (json.Search) {
          setLoading(false);
          setData(json.Search);
        }
        if (json?.Error) {
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("API Error", error);
    }
  };

  React.useEffect(() => {
    return () => {
      apiCall("app");
    };
  }, []);

  return (
    <div className="App-header">
      <h1>Task2 :-Movie Fetch</h1>

      <div>
        <input
          ref={inputRef}
          className="input"
          placeholder="Search movie name here"
        />
        <button
          className="input"
          onClick={() => {
            apiCall(inputRef?.current?.value);
          }}
        >
          Search
        </button>
      </div>

      {loading ? (
        <div>
          <img src={logo} className="App-logo" alt="loading ..." />
          <p>Loading ...</p>
        </div>
      ) : (
        <div className="grid-container">
          {data?.length > 0 || inputRef?.current?.value !== ""
            ? data?.map((item, i) => (
                <MovieCard className="grid-item" result={item} key={i} />
              ))
            : "No Movie Found"}
        </div>
      )}
    </div>
  );
}

export default Movie;
