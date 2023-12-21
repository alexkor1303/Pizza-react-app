import "./scss/app.scss";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/Pizzablock";
import React from "react";

function App() {
  const [pizzaItems, setPizzaItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://658432b54d1ee97c6bcf34ee.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((itemArr) => {
        setPizzaItems(itemArr);
      });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzaItems.map((obj) => (
                <PizzaBlock
                  key={obj.id}
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  pizzaSizes={obj.sizes}
                  pizzaTypes={obj.types}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
