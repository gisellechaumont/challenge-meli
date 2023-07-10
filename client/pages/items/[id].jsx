import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import ItemDetails from "../../components/item-detail/item-detail";

const ItemDetailsPage = () => {
  const router = useRouter();
  const  {id}  = router.query;

  return (
    <Fragment>
      <Head>
        <title>Detalles del producto | Challenge MELI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {id && <ItemDetails id={id} />}
    </Fragment>
  );
};
export default ItemDetailsPage;


