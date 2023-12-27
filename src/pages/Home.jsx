import React from "react";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";

export const Home = () => {
  const [pizzaItems, setPizzaItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [selectedSort, setSelectedSort] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    const order = selectedSort.sortProperty.includes("-") ? "asc" : "desc";
    setIsLoading(true);
    fetch(
      `https://658432b54d1ee97c6bcf34ee.mockapi.io/items?${
        categoryIndex > 0 ? `category=${categoryIndex}` : ""
      }&sortBy=${selectedSort.sortProperty.replace("-", "")}&order={order}`
    )
      .then((resultOfFetch) => {
        return resultOfFetch.json();
      })
      .then((resultOfFetch) => {
        setPizzaItems(resultOfFetch);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, selectedSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryIndex}
          onClickCategory={(id) => {
            setCategoryIndex(id);
          }}
        />
        <Sort
          value={selectedSort}
          onClickSelected={(id) => {
            setSelectedSort(id);
          }}
        />
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
    </div>
  );
};
export default Home;
