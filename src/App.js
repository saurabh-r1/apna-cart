import { useState } from "react";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
    {
      price: 99999,
      name: "Iphone 10S Max",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(products);

  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newTotalAmount =
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...products];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />

      <main className="container mt-5">
        <AddItem addItem={addItem} />

        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
