import React from 'react';
import Home from './components/Home';
import phone from "./assets/iphone.png";
import lap from "./assets/laptop.png";
import ipad from "./assets/tab.png";

const App = () => {
  return (
    <div>
      <Home name="Iphone" price="$989" desc="This is Iphone 13 Pro" img={phone} />
        <Home name="Acer" price="$763" desc="This is Acer Laptop" img={lap} />
          <Home name="Ipad" price="$788" desc="This is Apple Ipad" img={ipad} />
    </div>
  );
};

export default App;