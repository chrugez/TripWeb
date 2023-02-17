import React, {useEffect} from 'react';
import './offers.css';
import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

//import images....
import img5 from '../../Assets/image (5).jpg';
import img7 from '../../Assets/image (7).jpg';
import img8 from '../../Assets/image (8).jpg';

//use Map to list offers....
const Offer = [
    {
        id: 1,
        imgSrc: img5,
        destTitle: 'London',
        location: 'England',
        price: '$2,500',
    },
    {
        id: 2,
        imgSrc: img7,
        destTitle: 'Paris',
        location: 'France',
        price: '$2,300',
    },
    {
        id: 3,
        imgSrc: img8,
        destTitle: 'Rome',
        location: 'Italy',
        price: '$3,500',
    },
]

const Offers = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className='offer container section'>
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className='secTitle'>
                        Special Offers
                    </h2>
                    <p>
                        From historical cities to natural specteculars, come see the best of the world!
                    </p>
                </div>

                <div className="mainContent grid">

                    {
                        Offer.map(({id,imgSrc,destTitle,location,price}) => {
                            return (
                                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt={destTitle} />

                                        <span className='discount'>
                                            30% Off
                                        </span>
                                    </div>

                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>
                                                {price}
                                            </h4>
                                            <span className="status">
                                                For rent
                                            </span>
                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className="icon" />
                                                <small>2 Beds</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdBathtub className="icon" />
                                                <small>1 Bath</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <FaWifi className="icon" />
                                                <small>Wi-fi</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdAirportShuttle className="icon" />
                                                <small>Shuttle</small>
                                            </div>
                                        </div>

                                        <div className="location flex">
                                            <MdLocationOn className="icon" />
                                            <small>450 Vine #310, {destTitle}, {location}</small>
                                        </div>

                                        <button className='btn flex'>
                                            View Details
                                            <BsArrowRightShort className="icon" />
                                        </button>
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

export default Offers;