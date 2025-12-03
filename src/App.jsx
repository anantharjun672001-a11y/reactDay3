import React from 'react';
import Home from './components/Home';
import phone from "./assets/iphone.png";
import lap from "./assets/laptop.png";
import ipad from "./assets/tab.png";
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import List from './components/List';
import ArrayMethods from './components/ArrayMethods';


const App = () => {
  let a = 10;
  let arr = [1, 2, 3, 4, 5];
  let obj = { batch: "FSD-WD-B-33", mode: "Weekday", mentor: "Rupan" };
  let arrObj = [
    {
      name: "Iphone",
      price: "$899",
      desc: "This is Iphone 13 pro",
      image: phone,
    },
    {
      name: "Laptop",
      price: "$1000",
      desc: "This is Azsus Laptop",
      image: lap,
    },
    {
      name: "Tab",
      price: "$499",
      desc: "This is Ipad Pro",
      image: ipad,
    }
  ];
 

  return (
    <div>
      {/* <Home name="Iphone" price="$989" desc="This is Iphone 13 Pro" img={phone} />
        <Home name="Acer" price="$763" desc="This is Acer Laptop" img={lap} />
          <Home name="Ipad" price="$788" desc="This is Apple Ipad" img={ipad} /> */}

        {/* <CompA a={a} /> */}
        {/* <CompB obj={obj} /> */}
        {/* <CompC arr={arr}/>  */}
        {/* <List arrObj={arrObj}/> */}
        <ArrayMethods/>

    </div>
  );
};

export default App;