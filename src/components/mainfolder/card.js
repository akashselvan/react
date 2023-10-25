import React, { useState } from "react";
import "./card.css";
const Card = () => {
  const [heart, setHeart] = useState("");
  const [array, setArray] = useState([
    {
      id: 1,
      name: "Vanilla",
      price: 50,
      amount: 50,
      quantity: 1,
      image: "https://img.icons8.com/?size=100&id=87&format=png",
      red: "https://img.icons8.com/?size=96&id=uG-gOKWvvi8T&format=png",
      white: "https://img.icons8.com/?size=100&id=87&format=png",
      img: "https://media.istockphoto.com/id/1333023716/photo/milk-cake-delicious.jpg?s=1024x1024&w=is&k=20&c=sjhpE9hxZsM3zAXBULtAir0gAV6IaH3duoGGrhXZOLA=",
      rating: "4",
      desc: "Vanilla is a flavor which makes the cake taste divine!.Its made by a mixture of flour,eggs,sugar etc..",
    },
    {
      id: 2,
      name: "Strawberry",
      price: 60,
      amount: 60,
      image: "https://img.icons8.com/?size=100&id=87&format=png",
      quantity: 1,
      red: "https://img.icons8.com/?size=96&id=uG-gOKWvvi8T&format=png",
      white: "https://img.icons8.com/?size=100&id=87&format=png",
      img: "https://media.istockphoto.com/id/1146488934/photo/stawberry-cheesecake.jpg?s=1024x1024&w=is&k=20&c=hb1DZjTptuW5-iok-tIfqUA8A8UqCnPHtYOKul3EuCo=",
      desc: "Strawberry is a cake that uses strawberry as a primary ingredient which gives a beautiful taste!",
    },

    {
      id: 3,
      name: "Chocolate",
      price: 40,
      amount: 40,
      quantity: 1,
      image: "https://img.icons8.com/?size=100&id=87&format=png",
      red: "https://img.icons8.com/?size=96&id=uG-gOKWvvi8T&format=png",
      white: "https://img.icons8.com/?size=100&id=87&format=png",
      img: "https://media.istockphoto.com/id/1388023949/photo/chocolate-cake-slice-chocolate-cake-with-chocolate-ganache-and-topped-with-walnut-and-fresh.jpg?s=1024x1024&w=is&k=20&c=f9mGc0RTpkpjTtiuGq_7lCu8DQwgo8Iqq3jx-JBhtOo=",
      rating: "3.5",
      desc: "Chocolate cake  is a rich,decadent dessert with a deep,chocolately flavor",
    },
    {
      id: 4,
      name: "Butterscotch",
      price: 70,
      amount: 70,
      quantity: 1,
      image: "https://img.icons8.com/?size=100&id=87&format=png",
      red: "https://img.icons8.com/?size=96&id=uG-gOKWvvi8T&format=png",
      white: "https://img.icons8.com/?size=100&id=87&format=png",
      img: "https://media.istockphoto.com/id/486676314/photo/sponge-cake-with-butter-cream.jpg?s=1024x1024&w=is&k=20&c=Fht3bitl5U30FO5uH_qvUsupbmI-0lvh3PD4o82gXio=",
      rating: "4.2",
      desc: "This Butterscotch cake has tender moist brown butter cake layers, and other comforting flavors!",
    },
  ]);

  const incrementCount = (id) => {
    const newArray = array.map((data) =>
      data.id === id
        ? {
            ...data,
            quantity: data.quantity + 1,
            amount: data.price * (data.quantity + 1),
          }
        : data
    );
    setArray(newArray);
  };
  const whiteheartHandler = (id) => {
    const nArray = array.map((data) =>
      data.id === id
        ? {
            ...data,
            image: data.image === data.white ? data.red : data.white,
          }
        : data
    );

    setArray(nArray);
  };
  function addtocartHandle(data) {
    alert(` 
    Name:${data.name} 
    Price:${data.amount}
    Quantity: ${data.quantity}
     added to cart`);
  }
  const decrementCount = (id) => {
    const newArray = array.map((data) =>
      data.id === id
        ? {
            ...data,
            quantity: data.quantity - 1,
            amount: data.price * (data.quantity - 1),
          }
        : data
    );

    setArray(newArray);
  };

  return (
    <>
      <div className="cakes">
        {array.map((data) => {
          return (
            <div key={data.id} className="card">
              <div>
                <img className="scake " src={data.img} />
              </div>
              <div>
                <p>{data.desc}</p>
              </div>
              <div className="des">
                <h4>Quantity</h4>
                <h4>Total Price</h4>
                <h4>Delivery</h4>
              </div>
              <div className="rating">
                <div className="rate">
                  <button
                    className="sub"
                    onClick={() => decrementCount(data.id)}
                  >
                    -
                  </button>
                  <h3 className="num">{data.quantity}</h3>
                  <button
                    className="add"
                    onClick={() => incrementCount(data.id)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <h4 className="rup">${data.amount}</h4>
                </div>
                <div>
                  <h4 className="mins">In 60 mins</h4>
                </div>
              </div>
              <div className="combine">
                <div>
                  <img
                    onClick={() => whiteheartHandler(data.id)}
                    src={data.image}
                    className="rheart"
                  />
                </div>
                <div>
                  <button
                    className="cart"
                    onClick={() => {
                      addtocartHandle(data);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
