import React, {useEffect} from 'react';
import './about.css';import Aos from 'aos';
import 'aos/dist/aos.css';

//images....
import img1 from '../../Assets/plane (1).avif';
import img2 from '../../Assets/map.avif';
import img3 from '../../Assets/customer.avif';

//import video
import video from '../../Assets/video (1).mp4';
const About = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    
    return (
        <section className='about section'>
            <div className="secContainer">
                <h2 className="title">
                    Why Traveling?
                </h2>

                <div className="mainContent container grid">
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
                        <img src={img1} alt="Name" />

                        <h3>100+ Cities</h3>

                        <p>
                            There are a lot of be beautiful cities for you to discover
                        </p>

                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
                        <img src={img2} alt="Name" />

                        <h3>1000+ Locations</h3>

                        <p>
                            There are a lot of be beautiful cities for you to discover
                        </p>
                        
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
                        <img src={img3} alt="Name" />

                        <h3>12000+ Customers</h3>

                        <p>
                            There are a lot of be beautiful cities for you to discover
                        </p>
                        
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContainer grid">
                        <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
                            <h2>
                                Wonderful House experience in there!
                            </h2>
                            <p>
                                The Adventure subranking is based on an equally weighted average of scores from five country.
                            </p>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
                            <video src={video} autoPlay loop muted type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;