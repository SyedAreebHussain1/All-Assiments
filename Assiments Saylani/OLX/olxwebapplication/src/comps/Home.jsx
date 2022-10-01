import { Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdItem from "./AdItem";

function HomePage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      let _list = [];
      for (let i = 0; i < 21; i++) {
        _list.push(<AdItem placeholder={true} />);
      }
      setList(_list);
    }
  }, list);

  return (
    <React.Fragment>
      <div className="home-page">
        <div className="ad-list flex">{list}</div>
        <button className="load-more fontb c333 anim s20">Load more</button>
      </div>
      <div className="app-ribbon flex aic">
        <div className="img">
          <img className="bl" src="//www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" />
        </div>
        <div className="meta">
          <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
          <h2 className="slogan font s18 color">
            {" "}
            Buy, sell and find just about anything using the app on your mobile.
          </h2>
        </div>
        <div className="links">
          <h2 className="title fontb s20 color">GET YOUR APP TODAY</h2>
          <div style={{margin:'22px'}} className="flex as">
            <a href="#" className="noul bl">
              <img style={{height:'50px'}} src="//www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" />
            </a>
            <a href="#" className="noul bl">
              <img style={{height:'50px'}}  src="//www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" />
            </a>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
