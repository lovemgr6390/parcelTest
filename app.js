import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [myJoke, setMyJoke] = React.useState(null);
  const getData = async () => {
    try {
      const data = await axios("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setMyJoke(data.data.joke);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="cont">
        <h1>Dad Jokes</h1>
        <button onClick={() => getData()}>Get Joke</button>
        <p>{myJoke}</p>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
