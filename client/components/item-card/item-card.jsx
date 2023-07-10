import Image from "next/image";
import { Fragment } from "react";
import { useRouter } from "next/router";
import classes from "./item-card.module.scss";
const ItemCard = ({ picture, price, title, address, id, freeShipping }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/items/${id}`);
  };
  return (
    <Fragment>
      <li className={classes.itemCard} onClick={handleCardClick}>
        <div className={classes.itemPicture}>
          <Image
            className={classes.image}
            src={picture}
            alt="Foto del producto"
            width={180}
            height={180}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className={classes.itemDetails}>
          <div className={classes.itemPrice}>
            <p>{price}</p>
            {freeShipping == true && (
              <Image
                className={classes.freeShipping}
                src="/../public/assets/images/free_shipping2.jpg"
                alt="Envío gratis"
                width={25}
                height={25}
              />
            )}
          </div>
          <h3 className={classes.itemTitle}>{title}</h3>
        </div>
        <div className={classes.itemAddress}>
          <p>{address}</p>
        </div>
      </li>
    </Fragment>
  );
};

export default ItemCard;
