import classes from "./item-detail.module.scss";
import Button from "../button/button";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import formatPrice from "../../utils/format-price";
import Breadcrumb from "../breadcrumb/breadcrumb";

const ItemDetails = ({ id }) => {
  const [itemDetails, setItemDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

  useEffect(() => {
    const fetchDetailsItem = async () => {
      try {
        const response = await fetch(`${apiUrl}/${id}`);
        const data = await response.json();
        setItemDetails(data.item || []);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailsItem();
  }, [id]);

  if (!isLoading) {
    return null;
  }

  return (
    <Fragment>
      <div className={classes.item}>
        <div className={classes.itemDetails}>
          <div className={classes.imageWrapper}>
            <div className={classes.image}>
              <Image
                src={itemDetails.picture}
                alt="Imagen del producto"
                fill
                priority
              />
            </div>
          </div>

          <div className={classes.itemInfo}>
            <p className={classes.subtitle}>
              {itemDetails.condition === "used" ? "Usado" : "Nuevo"} -{" "}
              {itemDetails.sold_quantity} vendidos
            </p>
            <h2 className={classes.title}>{itemDetails.title}</h2>
            <div className={classes.price}>
              <p className={classes.amount}>
                {formatPrice(itemDetails.price.amount)}
              </p>
              <p className={classes.decimals}>{itemDetails.price.decimals}</p>
            </div>
            <Button />
          </div>
        </div>

        <div className={classes.itemDescription}>
          <h2 className={classes.descriptionTitle}>Descripción del producto</h2>
          <p className={classes.description}>{itemDetails.description}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemDetails;
