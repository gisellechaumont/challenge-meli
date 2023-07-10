import { useEffect, useState } from "react";
import classes from "./item-list.module.scss";
import ItemCard from "../item-card/item-card";
import formatPrice from "../../utils/format-price";
import Breadcrumb from "../breadcrumb/breadcrumb";

const ItemList = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (searchValue) {
          const response = await fetch(`${apiUrl}?q=${searchValue}`);
          const data = await response.json();
          setItems(data.items || []);
          setCategories(data.categories || []);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [searchValue]);

  return (
    <div className={classes.items}>
      <Breadcrumb categories={categories} />
      <div className={classes.itemContainer}>
        <ol className={classes.itemList}>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              picture={item.picture}
              price={formatPrice(item.price.amount)}
              title={item.title}
              address={item.seller_address}
              freeShipping={item.free_shipping}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ItemList;
