import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeroIndex extends Component {
  render() {
    return (
    	<section className="hero">
				<div className="wrapper">
					<div className="hero-input-box">
						<input className="hero-search" type="text" name="search-box" placeholder="search"/>
						<i className="fas fa-search"></i>
					</div>

					<section className="card-sec">
						<div className="small-card">
							<img id="logo" src={require("./../media/zomato.png")}/>
							<div className="right">
								<h2 is="title" >Zomato</h2>
								<div id="details" className="details">
									<span>
									<i className="fas fa-map-marker-alt"></i>
									Delhi
									</span>
									<span> Series E </span>
								</div>
							</div>
						</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/hackerearth.png")}/>
						<div className="right">
							<h2 is="title" >HackerEarth</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Bangalore
								</span>
								<span> Series A </span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/zoomcar.png")}/>
						<div className="right">
							<h2 is="title" >InstaMojo</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Bangalore
								</span>
								<span> Series B</span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/lookup.png")}/>
						<div className="right">
							<h2 is="title" >LookUp</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Bangalore
								</span>
								<span> Seed</span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/zoomcar.png")}/>
						<div className="right">
							<h2 is="title" >ZoomCar</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Hyderabad
								</span>
								<span> Series D</span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/zomato.png")}/>
						<div className="right">
							<h2 is="title" >Zomato</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Delhi
								</span>
								<span> Series E </span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/hackerearth.png")}/>
						<div className="right">
							<h2 is="title" >HackerEarth</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Bangalore
								</span>
								<span> Series A </span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/zomato.png")}/>
						<div className="right">
							<h2 is="title" >InstaMojo</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Bangalore
								</span>
								<span> Series B</span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/lookup.png")}/>
						<div className="right">
							<h2 is="title" >LookUp</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Bangalore
								</span>
								<span> Seed</span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/zoomcar.png")}/>
						<div className="right">
							<h2 is="title" >ZoomCar</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Hyderabad
								</span>
								<span> Series D</span>
							</div>
						</div>
					</div>

					<div className="small-card">
						<img id="logo" src={require("./../media/zoomcar.png")}/>
						<div className="right">
							<h2 is="title" >ZoomCar</h2>
							<div id="details" className="details">
								<span>
									<i className="fas fa-map-marker-alt"></i>
									Hyderabad
								</span>
								<span> Series D</span>
							</div>
						</div>
					</div>


						<div className="small-card">
							<h2 className="title placeholder" >More...</h2>
						</div>
					</section>
				</div>
			</section>
    )
  }
}

export default HeroIndex;


