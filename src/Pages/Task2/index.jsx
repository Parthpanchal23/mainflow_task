import React,{memo} from "react";
import MovieCard from "../../components/MovieCard";
import Loader from "../../Ui/loader";
import BackButton from "../../components/BackButton";

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
      <BackButton/>
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
            if(inputRef?.current?.value !=="")
            {

              apiCall(inputRef?.current?.value);
            }
            else{
              alert("search text is required");
            }
          }}
        >
          Search
        </button>
      </div>
      {loading ? (
        <Loader/>
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

export default memo(Movie);
