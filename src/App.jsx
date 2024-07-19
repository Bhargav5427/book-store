import React, { useEffect, useState } from "react";

// import required modules
import Header from "./Components/Header";
import BookStore from "./Components/BookStore";
import Mainwrapper from "./Components/Mainwrapper";
import { useGetData } from "./RTQ/queryHooks";

function App() {
  const { data, error, isLoading } = useGetData({
    key: "booksData",
    endpoint: "product/getProduct",
  });
  if(error){
    return <h1>Loading....</h1>
  }
  // if(isLoading){
  //   return <h1>Loading....</h1>
  // }
  return (
    <>
      <div className="book-store">
        <Header />
        <BookStore />
        <Mainwrapper />
      </div>
    </>
  );
}

export default App;
