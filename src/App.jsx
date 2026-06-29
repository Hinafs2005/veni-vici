import { useState } from "react";
import "./App.css";

function App() {
  const API_KEY =
    "live_nM8tpU9rDx3Q9cCaFFlMmwLjQYhyKpVF0tEhSAzCerDtqW6HwPeSakdbzD0qQqrT";

  const [cat, setCat] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchCat = async () => {
    let validCat = null;

    while (!validCat) {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${API_KEY}`
      );

      const data = await response.json();

      if (data[0].breeds && data[0].breeds.length > 0) {
        const newCat = data[0];

        const breed = newCat.breeds[0].name;
        const origin = newCat.breeds[0].origin;
        const life = newCat.breeds[0].life_span;

        if (
          !banList.includes(breed) &&
          !banList.includes(origin) &&
          !banList.includes(life)
        ) {
          validCat = newCat;
        }
      }
    }

    setCat(validCat);

    setHistory((prev) => {
      if (prev.some((item) => item.id === validCat.id)) {
        return prev;
      }
      return [validCat, ...prev];
    });
  };

  const addBan = (value) => {
    if (!banList.includes(value)) {
      setBanList([...banList, value]);
    }
  };

  return (
    <div className="App">
      {/* HISTORY */}
      <div className="history">
        <h2>History</h2>

        {history.length === 0 ? (
          <p>No cats discovered yet!</p>
        ) : (
          history.map((item) => (
            <div key={item.id} className="history-card">
              <img
                src={item.url}
                alt={item.breeds[0].name}
              />

              <div>
                <strong>{item.breeds[0].name}</strong>
                <p>{item.breeds[0].origin}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MAIN */}
      <div className="main">
        <h1>Veni Vici</h1>

        <p className="subtitle">
          Discover a random cat from around the world!
        </p>

        <button
          className="discover-btn"
          onClick={fetchCat}
        >
          Discover!
        </button>

        {cat && (
          <div className="cat-profile">
            <img
              className="cat-photo"
              src={cat.url}
              alt={cat.breeds[0].name}
              loading="lazy"
            />

            <div className="cat-info">
              <h2>{cat.breeds[0].name}</h2>

              <div className="attributes">
                <button onClick={() => addBan(cat.breeds[0].name)}>
                  Breed: {cat.breeds[0].name}
                </button>

                <button onClick={() => addBan(cat.breeds[0].origin)}>
                  Origin: {cat.breeds[0].origin}
                </button>

                <button onClick={() => addBan(cat.breeds[0].life_span)}>
                  Life Span: {cat.breeds[0].life_span} years
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BAN LIST */}
      <div className="ban">
        <h2>Ban List</h2>

        {banList.length === 0 ? (
          <p>No banned attributes yet!</p>
        ) : (
          banList.map((item) => (
            <button
              key={item}
              onClick={() =>
                setBanList(
                  banList.filter((ban) => ban !== item)
                )
              }
            >
              {item}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default App;