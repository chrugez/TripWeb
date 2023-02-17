import React, {useEffect} from 'react';
import './popular.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
//Import the images.................
import img1 from '../../Assets/image (1).jpg';
import img2 from '../../Assets/image (2).jpg';
import img3 from '../../Assets/image (3).jpg';
import img4 from '../../Assets/image (4).jpg';

//Use a high order array method to display all the destination using Map.

const Data = [
    {
        id: 1,
        imgSrc: img1,
        desTitle: 'London',
        location: 'England',
        grade: 'CULTURE RELAX',
    },
    {
        id: 2,
        imgSrc: img2,
        desTitle: 'Paris',
        location: 'France',
        grade: 'CULTURE RELAX',
    },
    {
        id: 3,
        imgSrc: img3,
        desTitle: 'Roma',
        location: 'Italy',
        grade: 'CULTURE RELAX',
    },
    {
        id: 4,
        imgSrc: img4,
        desTitle: 'Marid',
        location: 'Spain',
        grade: 'CULTURE RELAX',
    },
]

const Popular = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className='popular section container'>
            <div className="secContainer">

                <div className="secHeader flex">
                    <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                        <h2 className='secTitle'>
                            Popular Destination
                        </h2>
                        <p>
                            From historical cities to natural specteculars, come se the best of the world!
                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500" className="iconDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({id,imgSrc,desTitle,location,grade}) => {
                            return (
                                <div data-aos="fade-up" className="singleDestination">
                                    <div className="destImage">

                                        <img src={imgSrc} alt="title" />

                                        <div className="overlayInfo">
                                            <h3>{desTitle}</h3>
                                            <p>
                                               {location}
                                            </p>

                                            <BsArrowRightShort className='icon' />

                                        </div>
                                    </div>
                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                        </div>

                                        <div className="destText flex">
                                            <h6>
                                                {location}
                                            </h6>
                                            <span className='flex'>
                                                <span className='dot'>
                                                    <BsDot className="icon" />
                                                </span>
                                                Dot
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Popular;