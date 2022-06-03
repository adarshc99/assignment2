import React from 'react';

function Item(props)
{
    return <div className="col">
            <div className="d-flex flex-column mb-3">
              <div className="p-2 bg-dark text-white text-center">FOOD NAME :-{props.Name}</div>
              <img src={props.img} className="mx-auto d-block w-100 rounded" alt="an_image" height="200px" />
              <div className="p-2 bg-dark text-white text-center">Price:-{props.price}</div>
            </div>
          </div>
    
  
}
export default Item;