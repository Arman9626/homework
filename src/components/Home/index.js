import React from "react";
import Card from "./Card";
import AllDatas from "./data";

const Home = () => {
      return(
        <>
        {
            AllDatas.map((item) => {
                return(
                <Card 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                />)
            })
        }
        </>
      )
}
export default Home;