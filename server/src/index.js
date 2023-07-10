const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

//Endpoint de búsqueda de productos
//Trae 4 resultados

//Función para parsear el valor "price"
function splitNumberIntoParts(number) {
  const [amount, decimals] = number.toFixed(2).toString().split(".");
  return [amount, decimals];
}

app.get("/api/items", async (req, res) => {
  try {
    const query = req.query.q;
    const encodedQuery = encodeURIComponent(query);
    const itemsUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${encodedQuery}&limit=4`;
    console.log(itemsUrl);
    const response = await fetch(itemsUrl);
    const data = await response.json();

    let categories =
      data.filters?.[0]?.values?.map((value) => value.name) ?? [];

    const itemsData = {
      author: {
        name: "Giselle",
        lastname: "Chaumont Mohr",
      },
      categories: categories,
      items: data.results.map((item) => {
        const [amount, decimals] = splitNumberIntoParts(item.price);
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: amount,
            decimals: decimals,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          seller_address: item.address.state_name,
        };
      }),
    };

    res.json(itemsData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Ha ocurrido un error de servidor. Vuelva a intentarlo" });
  }
});

//Endpoint que trae los detalles del item seleccionado enviando su id
app.get("/api/items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const itemIdUrl = `https://api.mercadolibre.com/items/${itemId}`;
    const itemDescriptionUrl = `https://api.mercadolibre.com/items/${itemId}/description`;

    const [itemResponse, descriptionResponse] = await Promise.all([
      fetch(itemIdUrl),
      fetch(itemDescriptionUrl),
    ]);

    const [itemData, itemDescriptionData] = await Promise.all([
      itemResponse.json(),
      descriptionResponse.json(),
    ]);

    const [amount, decimals] = splitNumberIntoParts(itemData.price);

    const item = {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: amount,
        decimals: decimals,
      },
      picture: itemData.thumbnail,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: itemDescriptionData.plain_text,
    };

    const itemByIdData = {
      author: {
        name: "Giselle",
        lastname: "Chaumont Mohr",
      },
      item: item,
    };

    res.json(itemByIdData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Ha ocurrido un error de servidor. Vuelva a intentarlo" });
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port 5000");
});
