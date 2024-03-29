
import aboutImg from '../../assets/images/about.png';
// import aboutCardImg from '../../assets/images/about-/card.png'; 
import { Link } from 'react-router-dom';
const About = () => {
  return <section>

    <div className='containers'>
        <div className='flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
           {/* ======================about img =============== */}
           <div className='relative w-1/2 lg:w-1/2 xl:w-[880px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt="" />
            {/* <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
            lg:right-[22%]'>
                <img src={aboutCardImg} alt="" />
            </div> */}
           </div>
           {/* ========================================about about content ======================== */}
       

                   <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>COMMITTED TO EXCELLENCE IN HEALTHCARE FROM DAY ONE</h2>
                    <p className='text__para'>
                    Committed to excellence in healthcare from day one. With a fresh approach and dedication to exceptional service, we are here to provide top-notch medical care in a welcoming and supportive atmosphere. Our mission is to deliver superior healthcare services with a focus on your well-being and comfort may it be homeopathic or allopathic

                    </p>
                    <p className="text__para mt-[30px]"></p>

                    <Link to='/'>
                        <button className='btn'>Learn More</button>
                    </Link>
                   </div>
             

        </div>

    </div>
  </section>
};

export default About;
