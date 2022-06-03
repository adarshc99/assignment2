// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import pic1 from './images/burger1.jpg';
import pic2 from './images/burger2.jpg';
import pic3 from './images/burger3.jpg';
import pic4 from './images/burger4.jpg';
import pic5 from './images/burger5.jpg';
import Item from './Items';
const foodItem = 
[
  {Id:1,
   img:pic1,
   price:100,
   name:"Hamburger"
  },
  {Id:2,
    img:pic2,
    price:200,
    name:"Paneer Burger"
   },
   {Id:3,
    img:pic3,
    price:300,
    name:"Veg Burger"
   },
   {Id:4,
    img:pic4,
    price:100,
    name:"Cheese Burger"
   },
   {Id:5,
    img:pic5,
    price:100,
    name:"Pizza Burger"
   }
];
function App() 
{
  const [arrayItem,setOrder] = useState(foodItem);
  function listItem(val)
  {
    // console.log(val.Id,val.img,val.price);
    
    return <Item key={val.Id} price={val.price} img={val.img} Name={val.name}/>
  }
  function sortHadler(e)
  {
    if(e.target.value === "High")
    {
      const hsorted = [...arrayItem].sort((a, b) => {
        return a.price - b.price;
      });
      setOrder(hsorted);
    }
    if(e.target.value === "Low")
    {
      const lsorted = [...arrayItem].sort((a, b) => {
        return b.price - a.price;
      });
      setOrder(lsorted);
    }
  }
  return (
    <>
      <div className="container mt-3 ">
        <h2 className='text-center w-100 bg-danger'>FOOD HUNT</h2>
      <div className="d-flex p-3 bg-dark text-white text-white">
        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="High" onClick={sortHadler}/>High To Low Price
        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Low" onClick={sortHadler}/>Low To High Price
    </div>
    <hr/>
        <div className="row row-cols-3">
          {arrayItem.map(listItem)}
        </div>
      </div>
    </>
  );
}

export default App;
