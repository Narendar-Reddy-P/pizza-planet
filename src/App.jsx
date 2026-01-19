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

function Pizza(props) {
  return (
    <div className="pizza">
      <img
        src={`/pizza-planet/public/pizzas/${props.id}.jpg`}
        alt={props.name}
      />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{`₹ ${props.price}`}</span>
      </div>
    </div>
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

      {pizzaData.map((pizzaData) => {
        return (
          <Pizza
            name={pizzaData.name}
            ingredients={pizzaData.ingredients}
            price={pizzaData.price}
            id={pizzaData.id}
          />
        );
      })}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  return (
    <footer className="footer">
      {hour >= openHour && hour <= closeHour
        ? "We're currently open"
        : "Sorry, we're closed for now"}
    </footer>
  );
}
export default App;
