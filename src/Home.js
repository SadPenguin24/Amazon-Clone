import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images7.alphacoders.com/905/thumb-1920-905837.jpg"
          alt="amazon-prime"
        />
        <div className="home_row">
          <Product
            id={60277}
            title="TWICE - More & More"
            image="https://cdn.shopify.com/s/files/1/0087/5557/6894/products/twice1_1200x1200.jpg?v=1589256434"
            price={19.99}
            rating={5}
          />
          <Product
            id={60278}
            title="TWICE - Eyes Wide Open"
            image="https://cdn.shopify.com/s/files/1/0267/1371/8831/products/TWICE-BOX-SET-BACKUpdated_e1b91340-d489-4490-b9e1-9d3fc70cf7f2_1024x.png?v=1602023902"
            price={29.99}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={59717}
            title="TWICE - Photobook (Limited)"
            image="https://cdn11.bigcommerce.com/s-7uw7zc08qw/images/stencil/608x608/products/1914/8402/ImageViewerEShop__54549.1555703293.jpg?c=2"
            price={27.7}
            rating={4}
          />
          <Product
            id={59717}
            title="TWICE - Candy Bong Z Light Stick"
            image="https://cdn11.bigcommerce.com/s-7uw7zc08qw/images/stencil/608x608/products/2577/9154/candyz_detail__73673.1603260494.jpg?c=2"
            price={37.9}
            rating={5}
          />
          <Product
            id={59717}
            title="TWICE - [TWICELAND] THE OPENING CONCERT DVD"
            image="https://cdn11.bigcommerce.com/s-7uw7zc08qw/images/stencil/608x608/products/1761/8325/ImageViewerEShop__75647.1565880301.jpg?c=2"
            price={41.48}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={59717}
            title="Twice 1st Tour Concert Goods - Postcard Set"
            image="https://d3rwyinxzcqr6y.cloudfront.net/Assets/66/602/L_p0065660266.jpg"
            price={6.8}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
