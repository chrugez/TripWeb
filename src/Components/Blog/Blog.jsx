import React, {useEffect}  from 'react';
import './blog.css';
import {BsArrowRightShort} from 'react-icons/bs';
import img9 from '../../Assets/image (9).jpg';
import img10 from '../../Assets/image (10).jpg';
import img11 from '../../Assets/image (11).jpg';
import img12 from '../../Assets/image (12).jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

//use map()
const Posts=[
    {
        id:1,
        postImage: img9,
        title: 'Beautiful destination',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem voluptas dicta? Eligendi, eum dolor. Error pariatur reiciendis ullam exercitationem impedit. Aut dignissimos quos officia dolorum rem, quia quis aliquid?',
    },
    {
        id:2,
        postImage: img10,
        title: 'Beautiful destination',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem voluptas dicta? Eligendi, eum dolor. Error pariatur reiciendis ullam exercitationem impedit. Aut dignissimos quos officia dolorum rem, quia quis aliquid?',
    },
    {
        id:3,
        postImage: img11,
        title: 'Beautiful destination',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem voluptas dicta? Eligendi, eum dolor. Error pariatur reiciendis ullam exercitationem impedit. Aut dignissimos quos officia dolorum rem, quia quis aliquid?',
    },
    {
        id:4,
        postImage: img12,
        title: 'Beautiful destination',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem voluptas dicta? Eligendi, eum dolor. Error pariatur reiciendis ullam exercitationem impedit. Aut dignissimos quos officia dolorum rem, quia quis aliquid?',
    },
]

const Blog = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
                        Our Best Blog?
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2500">
                        An insight to the incredible experince in the world.
                    </p>
                </div>

                <div className="mainContainer grid">
                    {
                        Posts.map(({id,postImage,title,desc})=>{
                            return(
                                <div className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={postImage} alt={title} />
                                    </div>

                                    <div className="postDetails">
                                        <h3 data-aos="fade-up" data-aos-duration="3000">
                                            {title}
                                        </h3>
                                        <p data-aos="fade-up" data-aos-duration="4000">
                                           {desc}
                                        </p>
                                    </div>

                                    <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500">
                                        Read More
                                        <BsArrowRightShort className="icon" />
                                    </a>
                                </div>
                            )
                        })
                    }
                  
                </div>
            </div>
        </section>
    );
};

export default Blog;