import React, { Component, Fragment } from 'react';
import HeroComp from "./HeroComp";
import CompanyRating from "./CompanyRating";
import CompanyFinance from "./CompanyFinance";
import PhotoGallery from "./PhotoGallery";
import { connect } from "react-redux"


class Company extends Component {

  state = {
    currentCompany: {}
  }

  componentWillMount = () => {
    const companyName = this.props.match.params.name;
    this.props.companies.filter(company => {
      if(company.nameOfCompany === companyName){
        this.setState({
          currentCompany: company
        })
      }
    })
  }

  render() {
    console.log(this.props.companies)
    const {currentCompany} = this.state

    return (
      <Fragment>
        <section className="wrapper-c">
          <HeroComp currentCompany={currentCompany}/>
        </section>
        {/* <!-- CARD 3 : COMPANY PHOTO GALLERY --> */}
        <PhotoGallery currentCompany={currentCompany}/>
        {/* <!-- CARD 4 : COMPANY RATINGS --> */}
        <CompanyRating currentCompany={currentCompany}/>
        {/* <!-- CARD 5 : COMPANY FINANCE --> */}
        <CompanyFinance currentCompany={currentCompany}/>
      </Fragment>
    );
  }
}




// _________________mapState____________________________________________________

const mapStateToProps = (state) => {
  return {
    companies: state.companies
  }
}

export default connect(mapStateToProps)(Company);
