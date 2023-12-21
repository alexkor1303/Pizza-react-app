import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((name, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={activeIndex === i ? "active" : ""}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
