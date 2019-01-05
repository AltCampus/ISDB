import React, { Component, Fragment } from 'react';
import HeroCompLogo from "./HeroCompLogo";
import Sector from "./HeroCompSectorCard";
import Funding from "./HeroCompFundingCard";
import Overview from "./HeroCompOverview";
import Products from "./HeroCompProduct";
import Founded from "./HeroCompFounded";


class HeroComp extends Component {

  render() {

    return (
      <section className="hero-comp">
          <HeroCompLogo />
        <section className="hero-details2">
          {/* <!-- Sector card --> */}
          <Sector />
          {/* <!-- Funding card --> */}
          <Funding />
          {/* <!-- Overview card --> */}
          <Overview />
          {/* <!-- Products card --> */}
          <Products />
          {/* <!-- Founded card --> */}
          <Founded />
        </section>
      </section>
    );
  }
}
export default HeroComp;