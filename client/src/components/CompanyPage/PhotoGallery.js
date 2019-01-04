import React, { Component, Fragment } from 'react';


class PhotoGallery extends Component {

  render() {

    return (
      <section className="display-card">
        <h2>PHOTO GALLERY</h2>
        <hr className="company-details" />
        <div className="outer-box">
          <div className="font-icon-container left">
            <a href="#"><i className="fas fa-arrow-left"></i></a>
          </div>
          <img src="https://storiesflistgv2.blob.core.windows.net/stories/2017/05/flipkartlove_inside3.jpg" />
          <img src="https://im.indiatimes.in/content/2015/Aug/flip_1438588582.jpg" />
          <img src="https://storiesflistgv2.blob.core.windows.net/stories/2017/05/flipkartlove_inside2.jpg" />
          <div className="font-icon-container right">
            <a href="#"><i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>
          );
  }
}
export default PhotoGallery;