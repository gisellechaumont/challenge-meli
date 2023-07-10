import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import ItemList from "../../components/item-list/item-list";

const Items = () => {
  const router = useRouter();
  const searchQuery = router.query.search;
  const title = capitalize(searchQuery);

  function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return (
    <Fragment>
      <Head>
        <title> {title} | Challenge MELI </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ItemList searchValue={searchQuery} />
    </Fragment>
  );
};
export default Items;
