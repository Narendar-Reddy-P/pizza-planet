import pizzaData from "./assets/data";
import "../src/index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name} />
      {/* <img src={`/pizza-planet/public/${photoName}`} alt={name} /> */}
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `₹ ${price}`}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Planet</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizzaData) => {
            return (
              <Pizza
                name={pizzaData.name}
                ingredients={pizzaData.ingredients}
                price={pizzaData.price}
                photoName={pizzaData.photoName}
                soldOut={pizzaData.soldOut}
              />
            );
          })}
        </ul>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour ? true : false;
  return (
    <footer className="footer order">
      {isOpen && (
        <>
          <p>We are open till {closeHour}:00. Come visit us or Order online</p>
          <button className="btn">Order Now</button>
        </>
      )}
      {!isOpen && <p>We are closed for now. Visit us at {openHour}:00</p>}
    </footer>
  );
}
export default App;
