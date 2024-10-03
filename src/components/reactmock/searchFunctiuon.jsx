

import { useMemo, useState } from "react";

const Search = () => {
  const [searchItems, setSearchItems] = useState("");
  const [items, setItems] = useState([
    "apple",
    "mango",
    "orange",
    "blackberry",
    "pineapple",
  ]);

  const filteredItems = useMemo(() => {
    return items.filter((each) => each.includes(searchItems)); 
  }, [searchItems, items]);

  const changeHandler = (event) => {
    setSearchItems(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchItems} onChange={changeHandler} />
      {filteredItems.map((each, index) => (
        <h1 key={index}>{each}</h1>
      ))}
    </div>
  );
};

export default Search;
