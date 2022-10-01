import React, { Component } from "react";
import { Navbar, Navbarword } from "./components/header";
import Carousel from "./components/carousel";
import Loadmore from "./components/loadmore";
import Card from "./components/card";
import { Footerfirst, Footers, Footer } from "./components/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="sabsemain">
        <div>
          <Navbar />
        </div>
        <div>
          <Navbarword />
          <br />
          <Carousel />
        </div>
        <br />
        <br />
        <div className="mainseuper">
          <div className="main">
            {/* <br /> */}
            <div className="Fresh-recommendations">
              <p className="Fresh">Fresh recommendations</p>
            </div>
            {/* <br /> */}
            <div className="appcard">
            <div className="appcarddiv1">
              <Card
                location="Abbot Road, Lahore"
                name="Toyota corolla 1.8 crusetronic 2016"
                price="3,000,0000"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2014_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282014-04-11%29.jpg/1200px-2014_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282014-04-11%29.jpg"
              />
              <Card
                location="Lahore, Pakistan"
                name="5 Marla Brand New Spanish house"
                price="31,000,000"
                img="https://s3.amazonaws.com/images-aarz/uploads/properties/2019/2/10-marla-house-for-sale-in-pakistan-town-islamabad-for-rs-171-crore-202528-image-1-actual.jpg"
              />
              <Card
                location="Karachi, Pakistan"
                name="IPHONE XSMAX 64GB GOLDEN"
                price="55,000"
                img="https://www.discdepotdundee.co.uk/files/2021/11/iphone-XS-Max-64GB-Gold-opti.jpg"
              />
              <Card
                location="Quetta, Balochistan"
                name="Toyota Land Cruiser LX Turbo"
                price="10,500,00"
                img="https://wbuysell.com/images/2020/05/19/1331/toyota-land-cruiser-2016-zx-v8-for-sale_1.jpg?v=1589834668"
              />
            </div>
            {/* <br /> */}
            <br />
            <div className="appcarddiv2">
              <Card
                location="Rawalpindi, Punjab"
                name="Honda CG 125 Speical Edition"
                price="1,25,000"
                img="https://i.ytimg.com/vi/hlACqa40wZ0/maxresdefault.jpg"
              />
              <Card
                location="Islamabad, Pakistan"
                name="Haier Inverter AC 1 Ton"
                price="95,000"
                img="https://compareprice.pk/wp-content/uploads/2020/04/haier-hsu-12hni-1-ton-dc-inverter-split-ac-black-price.jpg"
              />
              <Card
                location="Gulberg Town, Karachi"
                name="Indus Fan"
                price="5,700"
                img="https://www.pngitem.com/pimgs/m/293-2934579_frorer-price-2019-indus-fans-price-in-pakistan.png"
              />
              <Card
                location="Gulshan e Iqbal, Karachi"
                name="Miele 8 kg Front Load"
                price="200,000"
                img="https://www.winnings.com.au/public/images/product/wwd660/extrnl/miele-8kg-front-load-washing-machine-wwd660-3-5c3fc8da-high.jpeg"
              />
            </div>
            <br />
            {/* <br /> */}
            <div className="appcarddiv3">
              <Card
                location="North Karachi,Karachi"
                name="CCTV Camer"
                price="15,899"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wSA5XBzujScridBXH4bzENtjHwNBH7PRSQ&usqp=CAU"
              />
              <Card
                location="Bufferzone, Karachi"
                name="SAMSUNG LED 49inch"
                price="107,500"
                img="https://cdn.vox-cdn.com/thumbor/y-NbDKKMqMTg4TSlilKskUtA6XY=/0x0:1280x853/1200x800/filters:focal(538x325:742x529)/cdn.vox-cdn.com/uploads/chorus_image/image/64015212/Samsung_TV_iTunes_Movies_and_TV_shows.0.jpg"
              />
              <Card
                location="New Karachi Town"
                name="Suzuki Mehran Model 2009"
                price="150,000"
                img="https://www.pkmotors.com/public/uploads/allpictures/car-suzuki-mehran-vxr-2009-lahore-26229-3.jpeg"
              />
              <Card
                location="Karsaz,Karachi"
                name="HP Laptop core i5"
                price="190,000"
                img="https://www.gannett-cdn.com/-mm-/925c90cac2950828bbb61819371c14292ee6081b/c=0-0-792-446/local/-/media/2020/06/30/USATODAY/usatsports/HP-Envy-x360-2020-vs-spectre-x360.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp"
              />
            </div>
            <br />
            {/* <br /> */}
            <div className="appcarddiv4">
              <Card
                location="Tariq Road,Karachi"
                name="Shops for Sale"
                price="65,00000"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6imS3xfFbrqPfK2Ja22S6QtFNPut111cEQ&usqp=CAU"
              />
              <Card
                location="North Nazimabad,Karachi"
                name="Laser Printer"
                price="250,000"
                img="https://static-01.daraz.pk/p/26de9015f6ac677b53dee55bd75b0729.jpg"
              />
              <Card
                location="PWD,Islamabad"
                name="The Beginner's Guide to PC Gaming"
                price="150,000"
                img="https://www.reviewgeek.com/p/uploads/2020/12/19a62eff.jpg?height=200p&trim=2,2,2,2"
              />
              <Card
                location="Defence Phase-6,Karachi"
                name="New and used Mirror for sale"
                price="17,399"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYK86PKVLrYEeriQztfC0fNPntOf5p7e_0YQ&usqp=CAU"
              />
            </div>
            <br />
            <div className="appcarddiv5">
              <Card
                location="Behria Town,Lahore"
                name="African Gray Parrot"
                price="45,000"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMQOmgsSb2lEo8KYDoJorkVgqHO3pFUeHyA&usqp=CAU"
              />
              <Card
                location="Gul PLaza,Karachi"
                name="Cotton Black Cap"
                price="700"
                img="https://image.shutterstock.com/image-photo/black-baseball-cap-four-different-260nw-1435781489.jpg"
              />
              <Card
                location="Red Zone,Islamabad"
                name="Heavy Bikes Showroom in Pakistan"
                price="500,000"
                img="https://driver.pk/wp-content/uploads/2018/04/Chinese-Heavy-Bikes-Showrooms-in-Pakistan-Contact-Number-Address.jpg.webp"
              />
              <Card
                location="Saima Arabian Villas,Karachi"
                name="Single Storey House For Sale"
                price="10,350,00"
                img="https://media.zameen.com/thumbnails/43591249-800x600.jpeg"
              />
            </div>
            <br />
            <div className="appcarddiv6">
              <Card
                location="DHA Phase 3,Lahore"
                name="DHA Phase 3 block Y plot no near 455 cornor"
                price="10,350,00"
                img="https://images.zameen.com/smap/400/300/24.932222/67.14726/image.jpeg?quality=80&imageformat=jpeg"
              />
            </div>
            </div>
            <br />
            <div>
              <Loadmore />
            </div>
            <br />
            <br />
            <div className="footerff">
            <Footerfirst />
            </div>
          </div>
        </div>
        <div>
          <Footers />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
