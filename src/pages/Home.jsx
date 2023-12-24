import React from "react";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";

export const Home = () => {
  const [pizzaItems, setPizzaItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://658432b54d1ee97c6bcf34ee.mockapi.io/items")
      .then((resultOfFetch) => {
        return resultOfFetch.json();
      })
      .then((resultOfFetch) => {
        setPizzaItems(resultOfFetch);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : pizzaItems.map((obj) => (
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
    </>
  );
};
export default Home;
