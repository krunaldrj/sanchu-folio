import React from "react";
import {useRef} from "react";
import {useEffect} from "react";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
    const ref = useRef(null);
	useEffect(() => {
		if(ref){
			new LocomotiveScroll({
					el: document.querySelector("#js-scroll"),
					smooth: true,
					smoothMobile: true,
					inertia: 0.75,
			})
		}
		
	}, [])

    return(
        <body id="js-scroll" ref={ref} data-scroll-body>
        <header>
            <div class="wrapper">
			<div class="container">
				
				<div class="navbar">
					<div class="navbar-container">
						<div class="site-title">by sanchita</div>
						<div class="site-type">folio</div>
						<div class="site-year">2021</div>
					</div>
				</div>

			
				<div class="divider"></div>

				
				<div class="header">
					<div class="header-container">
						<h1>Sanchita Rane<br />Web Designer &nbsp;Bussiness developer</h1>
					</div>
				</div>

				
				<div class="hero-image">
					<div class="hero-image-container" data-scroll data-scroll-speed="2">
						<img src="images/profile.jpg" alt="" />
					</div>
				</div>

				<div class="whitespace"></div>

		
				<div class="section-header">
					<div class="section-header-container">
						<div class="section-title">about</div>
						<div class="section-order">/001</div>
					</div>
				</div>

				<div class="divider"></div>

		
				<section class="about">
					<div class="about-container">
						<p>
							Hey Wassup! I am Sanchita the web designer and business developer 
							I make design for culture, modern and attractive website.
						</p>
						<p>
							I also make strategy to execute offline marketing and digital
							marketing.
						</p>
						<p>also I do social media influencing.</p>
					</div>
				</section>

				<div class="whitespace"></div>

				<div class="section-header">
					<div class="section-header-container">
						<div class="section-title">projects</div>
						<div class="section-order">/002</div>
					</div>
				</div>

				<div class="divider"></div>

				<section class="project">
					<div class="project-container">
						<div>
							<nav class="menu">
								<div class="menu__item">
									<a class="menu__item-link">/ Asterisks</a>
									<img class="menu__item-img" src="images/project-one.jpeg" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Asterisks</span>
											<span>Asterisks</span>
											<span>Asterisks</span>
											<span>Asterisks</span>
										</div>
									</div>
								</div>

								<div class="divider"></div>

								<div class="menu__item">
									<a class="menu__item-link">/ Unlocked</a>
									<img class="menu__item-img" src="images/project-two.jpeg" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Unlocked</span>
											<span>Unlocked</span>
											<span>Unlocked</span>
											<span>Unlocked</span>
										</div>
									</div>
								</div>

								<div class="divider"></div>

								<div class="menu__item">
									<a class="menu__item-link">/ Offbeat Radio</a>
									<img class="menu__item-img" src="images/project-three.jpeg" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Offbeat Radio</span>
											<span>Offbeat Radio</span>
											<span>Offbeat Radio</span>
											<span>Offbeat Radio</span>
										</div>
									</div>
								</div>

								<div class="divider"></div>

								<div class="menu__item">
									<a class="menu__item-link">/ Brutal</a>
									<img class="menu__item-img" src="images/project-four.jpeg" />
									<div class="marquee">
										<div class="marquee__inner">
											<span>Brutal</span>
											<span>Brutal</span>
											<span>Brutal</span>
											<span>Brutal</span>
										</div>
									</div>
								</div>

								<div class="divider"></div>

								<div class="menu__item">
									<a class="menu__item-link">/ The Crew</a>
									<img class="menu__item-img" src="images/project-five.jpeg" />
									<div class="marquee">
										<div class="marquee__inner" aria-hidden="true">
											<span>The Crew</span>
											<span>The Crew</span>
											<span>The Crew</span>
											<span>The Crew</span>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</section>

				<div class="whitespace"></div>

				<div class="section-header">
					<div class="section-header-container">
						<div class="section-title">clients</div>
						<div class="section-order">/003</div>
					</div>
				</div>

				<div class="divider"></div>

				<section class="clients">
					<div class="clients-container">
						<p>
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;telia, vizrt, edlund, pensam,
							mp pension, charlie tango, molio, scout.org, pelican selfstorage,
							danske bank, groupcare, banedanmark, samvirke, dsb, kmd,
							udviklings og forenklings
							<br />
						</p>
					</div>
				</section>

				<div class="whitespace"></div>

				<div class="section-header">
					<div class="section-header-container">
						<div class="section-title">socials</div>
						<div class="section-order">/004</div>
					</div>
				</div>

				<div class="divider"></div>

				<section class="socials">
					<div class="socials-container">
						<div class="socials-id ln"><a href="">linkedin</a></div>
						<div class="socials-id ig"><a href="">instagram</a></div>
						<div class="socials-id tw"><a href="">twitter</a></div>
					</div>
				</section>

				<div class="divider"></div>

				<div class="footer">
					<div class="navbar">
						<div class="navbar-container">
							<div class="site-title">created by krunal</div>
							<div class="site-year">2021</div>
						</div>
					</div>
				</div>
				<br />
			</div>
		</div>
        </header>
        </body>
    )
}


export default Home;