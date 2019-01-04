import React, { Component, Fragment } from 'react';


class CompanyRating extends Component {

  render() {

    return (
      <section className="display-card">
        <h2>flipcart ratings and reviews</h2>
        <hr className="company-details" />
        <div className="ratings-cntnr">
          <div className="ratings-box">
            <div className="ratings"><h3>4.0</h3></div>
            <div className="star-bg"><i className="fas fa-star"></i></div>
            <div className="star-bg"><i className="fas fa-star"></i></div>
            <div className="star-bg"><i className="fas fa-star"></i></div>
            <div className="star-bg"><i className="fas fa-star"></i></div>
            <div className="star-bg"><i className="fas fa-star "></i></div>
          </div>
          <div className="ceo-rating">
            <img src="assets/media/ceo2.jpg" alt="" />
            <div>
              <h1>Kalyan Krishnamurthy</h1>
              <p>2 Ratings</p>
            </div>
          </div>
        </div>

        <section className="reviews">

          {/* <!-- latest reviews --> */}
          <div className="reviews-date">
            <p>1 Jan 2019</p>
            <img className="rating-sec-logo" src="assets/media/flipkart-logo.png" alt="" />
          </div>

          {/* <!-- common-reviews --> */}
          <div className="common-review">
            <p>"Auditing"</p>
            <div className="reviews-rating-stars">
              <div className="star-bg"><i className="fas fa-star"></i></div>
              <div className="star-bg"><i className="fas fa-star"></i></div>
              <div className="star-bg"><i className="fas fa-star"></i></div>
              <div className="star-bg"><i className="fas fa-star"></i></div>
              <div className="star-bg"><i className="fas fa-star "></i></div>

              <p>Current Employee - Audit Manager in Chennai</p>
            </div>

            <div>
              <p>I have been working at Flipkart part-time (Less than a year)</p>
              <h6>pros</h6>
              <p>To increase my knowledge</p>

              <h6>Cons</h6>
              <p>A downward trend ,a financial loss</p>
            </div>
          </div>
        </section>
        <div className="all-review-sec">
          <a href="#"><p>See All 1,111 Reviews</p></a>
          <a href="#"><i className="fas fa-angle-right"></i></a>
        </div>
      </section>
          );
  }
}
export default CompanyRating;