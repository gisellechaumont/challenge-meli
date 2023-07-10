import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import classes from "./search-box.module.scss";

const SearchBox = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (router.pathname === "/") {
      setSearchValue("");
    }
  }, [router.pathname]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (searchValue !== "") {
      router.push(`/items?search=${encodeURIComponent(searchValue)}`);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <Link href="/" as="/">
          <Image
            className={classes.logo}
            src="/assets/images/MELI-logo.png"
            alt="Logo de Mercado Libre"
            width={58}
            height={38}
          ></Image>
        </Link>
        <div className={classes.searchBox}>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              value={searchValue}
              onChange={handleInputChange}
            />
            <button type="submit">
              <Image
                src="/assets/images/search-icon.png"
                alt="Lupa del Buscador"
                width={20}
                height={20}
              ></Image>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
