import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import ContentsBody from './components/ContentsBody'



function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        console.log(response.data.coins)
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Search Crypto . . . "
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>

      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <ContentsBody
              name={coin.name}
              icon={coin.icon}
              price={coin.price.toFixed(2)}
              symbol={coin.symbol}
              url={coin.websiteUrl}
              twitt={coin.twitterUrl}
              key={coin.rank}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;