import { Fragment } from "react";
import "../styles/globals.scss";
import SearchBox from "../components/search-box/search-box";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <div className="container">
        <SearchBox />
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
