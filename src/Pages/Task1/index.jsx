import React,{memo} from "react";
import logo from "../../assets/logo.svg";
import BackButton from "../../components/BackButton";
function Task1() {
  const [count, setCount] = React.useState(0);
  const btnClass = {
    borderRadius: "1rem",
  };

  const counterClass = { 
    display: "flex",
    flexDirection:"column" ,
    border:"1px solid  #fff",
    padding:"5px"
  };
  return (
      <header className="App-header">
        <BackButton/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Task:-1 Counter App</h1>
        <div style={counterClass}>
          <button
            className={btnClass}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <span style={{ padding: "1rem" }}>{count}</span>
          <button
            className={btnClass}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
        </div>
      </header>
  );
}

export default memo(Task1);
