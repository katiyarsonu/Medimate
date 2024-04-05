
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import faqImg from '../assets/images/faq-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import {Link} from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList'
import DoctorsList from '../components/Doctors/DoctorsList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial'
// import Testimonial from '../components/Testimonial/Testimonial';
const Home = () => {

  
  return (
  <>
  {/*================hero section ============================*/}
 
  <section className='hero__section pt-[60px] 2xl:h-[800px]'>

    <div className="container">
      <div className='flex flex-col lg:flex-row gap-[90px] items center justify-between'>
 {/*=========================hero content ========================  */}
 <div>
  <div className='lg:w-[570px]'>
    <h1 className='text-[12px] leading-[60px] text-headingColor font-[900] md:text-[50px] md:leading[70px]'>
      YOUR PARTNER<br />IN HEALTH <br /> MANAGEMENT
    </h1>
    <p className='text__para'>
    {/* Ready to feel better?  Head over to the "Book Appointment" section!  It's a breeze - simply pick your chosen doctor, find a time that fits your needs, and confirm your appointment in seconds.  We'll handle the rest, so you can focus on getting back to your healthy self!  ️ */}
    Ready to take control of your health journey? Dive into our user-friendly platform and experience seamless appointment booking with your preferred healthcare provider. Whether it's a routine check-up or addressing specific health concerns, our intuitive interface allows you to effortlessly select your doctor, choose a convenient time slot, and confirm your appointment within moments. Leave the logistics to us while you focus on your well-being. Let's embark on the path to better health together! 💙


    </p>
    <button className='btn'> Book Appointment</button>
  </div>

  {/* ========hero counter ================= */}
  <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

    <div>
      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+

      </h2>
      <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
      <p className='text__para'>Years of Experience</p>

    </div>


    
    <div>
      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+

      </h2>
      <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
      <p className='text__para'>Clinic Location</p>

    </div>

    
    <div>
      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%

      </h2>
      <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
      <p className='text__para'>Patient Satisfaction</p>


    </div>


  </div>
 </div>

 {/* ==========================hero content ====================== */}

 <div className='flex gap-[30px] justify-end'>
  <div>
<img  className="w-full"src={heroImg01} alt="" />
  </div>
  <div className='mt-[30px]'>
    <img src={heroImg02} alt="" className='w-full mb-[30px]' />
    <img src={heroImg03} alt=""  className='w-full'/>
  </div>
 </div>



      </div>
    </div>
  </section>
  
  {/* ===============hero section end ================== */}

  <section>
    <div className='container'>
      <div className='lg:w-[550px] mx-auto'>
        <h2 className='heading text-center'>
          {/* Providing the best medical services */}
          EFFORTLESSLY MANAGE YOUR HEALTHCARE NEEDS WITH MEDIMATE
        </h2>
        {/* <p className='text__para text-center'>Empower your healthcare journey. Our app connects you with a network of trusted providers, making it easier to find the right doctor for your needs. Schedule appointments with ease and take charge of your well-being, all within a convenient app.</p> */}
           <br/>
        Streamlining appointment bookings, accessing doctor information, and receiving timely updates, all while ensuring efficient emergency response.

      </div>


      <div className='flex flex-wrap items-center  justify between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

          <div className='py=[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon01} alt="" />

            </div>


             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Ved?
             
              </h2>
              {/* <p className='text-[16px] leading=7 text-textColor font-[400] mt-4 text-center'>Top-notch health care, without the hassle. We've got a team of amazing experts, ready to help you feel your best - from quick tests to in-depth consultations. Everyone deserves great healthcare, and we make it easy to get.</p> */}
                    <br/>
              Discovered a nearby homeopathic treatment? Enter your location details, and once verified, unlock rewards such as discounts and even an exclusive VIP pack for our website!

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>


               <BsArrowRight className='group-hover:text-white w-6 h-5'/> 
              </Link>
             </div>
          </div>

          {/* //test 1 */}

          <div className='py=[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon02} alt="" />

            </div>


             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location?
             
              </h2>
              <p className='text-[16px] leading=7 text-textColor font-[400] mt-4 text-center'>Feeling under the weather? Our "Find a Location" section is here to help! Search for awesome doctors near you, filter by what you need (like magic!), and snag an appointment that works for your busy schedule.</p>

              <Link to='/maps' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>


               <BsArrowRight className='group-hover:text-white w-6 h-5'/> 
              </Link>
             </div>
          </div>


          {/* test2 */}


          <div className='py=[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon03} alt="" />

            </div>


             <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment
             
              </h2>
              <p className='text-[16px] leading=7 text-textColor font-[400] mt-4 text-center'>Feeling ouch-y?  Don't wait!  The "Book Appointment" section is your new BFF.  Pick your doc, snag a time that works for your jam-packed schedule, and confirm your appointment with a tap - easy peasy!  We'll take care of the details, so you can chill and get back to feeling awesome.</p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>


               <BsArrowRight className='group-hover:text-white w-6 h-5'/> 
              </Link>
             </div>
          </div>


        </div>

      </div>
      
    </div>
  </section>

  {/* =============about section starts ================================== */}
  <About/>
  {/* =============about section end ================================== */}
  {/* ==============================services section======================= */}
  <section>
    <div className="container">
      <div className="xl:w-[900px] mx-auto">
        <h2 className='heading text-center'>OUR MEDICAL SERVICES</h2>
        <p className='text__para text-center'>
        Revolutionize your healthcare journey body - Seamlessly navigate through our intuitive app to take charge of your wellness. Discover top-rated providers based on specialty, insurance, or location, ensuring you find the perfect fit for your needs. Easily schedule appointments that suit your busy lifestyle, transforming healthcare into a stress-free experience. Plus, explore our unique feature 'Ved's' where you can access details of homeopathic doctors and even contribute verified locations, earning rewards along the way
        </p>
        </div>

        <ServiceList />
        </div>
  </section>

 {/* ==============================services section end======================= */}
 {/* ==============================feature section ======================= */}
 <div className="container">
  <div className='flex items-center justify-between flex col lg:flex-row'>
    {/* ===============================feature content =============================== */}
    <div className='xl:w-[670px]'>
      <h2 className='heading'>Get virtual treatment <br /> anytime </h2>
      <ul className="pl-4">
        <li className="text__para">1.Schedule the appointment directly.</li>
        <li className="text__para">2.Search for your physican here and contact their office .</li> 
        <li className="text__para">3.View our physian who are accepting new patients, use the online scheduling tool to select an appointment time.</li> 
      </ul>
      <Link to='/'>
        <button className='btn'> Learn More </button>
      </Link>
    </div>

    {/* =====================================feature img=========================================== */}
    <div className='relative z-10 xl:w-[770px] flew justify-end mt-[100px] lg:mt-0'>
      <img src={featureImg} className='w-3/4' alt="" />
      <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>


        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[6px] lg:gap-3'>
            <p className='text[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
            font-[600]'>Tue,24</p>

            <p className="text[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
            font-[400]"> 10:00 AM</p>
          </div>

          <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
            <img src={videoIcon} alt="" />
          </span>
        </div>


        {/* <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
          Consultation
        </div>
 */}

        {/* <div className='flex items-center gap-[6px] lg:gap-[10px] mt-9 lg:mt-[18px] '>
          <img src={avatarIcon} alt="" />
          <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Aryan Yadav </h4>
        </div> */}
      </div>
    </div>
  </div>
 </div>


 {/* ==============================feature section end======================= */}
 {/* ==============================our great doctors======================= */}

 <section>
  <div className="container">
  <div className="xl:w-[470px] mx-auto">
        <h2 className='heading text-center'>OUR GREAT DOCTORS</h2>
        <p className='text__para text-center'>
        Ditch the appointment anxiety!  Our app is your wingman in finding the healthcare hero you've been waiting for.  Search by location, specialty, and even patient reviews to discover your ideal doc.

No more feeling like a number!  With our app, you can build a winning connection with a doctor who listens.  Ask all your questions, share your health concerns openly, and get the exceptional care you deserve.  We're here to make healthcare feel a whole lot less, well, ugh.
        </p>
        </div>

        <DoctorsList />

  </div>
 </section>
 {/* ==============================our great end======================= */}
 {/* ==============================faq======================= */}

 <section>
  <div className="container">
    <div className='flex justify-between gap-[50px] lg:gap-0'>
      <div className='w-1/2 hidden md:block'>
        <img src={faqImg} alt="" />
        </div>

      <div className='w-full md:w-1/2'>
        <h2 className='heading'>MOST QUESTIONS BY OUR BELOVED PATIENTS</h2>
        <FaqList/>
    </div>
  </div> 
  </div>
 </section>
 {/* ==============================faq  end======================= */}
 
 {/* ==============================testimonial end======================= */}
 <section>
  <div className='container'>
  <div className="xl:w-[470px] mx-auto">
        <h2 className='heading text-center'>WHAT OUR PATIENT SAY</h2>
        <p className='text__para text-center'>
        Check out what our awesome patients are saying! Get the inside scoop on their experiences and why they love our care. From routine check-ups to life-changing treatments, hear it straight from the ones who matter most – our patients!
        </p>
      </div>
      <Testimonial/>
  </div>
 </section>
 {/* ==============================testimonial end======================= */}

 {/* for chatbot */}

 <section>
  <div className='container'>
  <div className="xl:w-[470px] mx-auto">
        <h2 className='heading text-center'>MEET MEDIBOT</h2>
        <p className='text__para text-center'>
        Enhance user experience and engagement with our AI-powered chatbot solution.
        </p>
      </div>
  </div>
 </section>

  
  </>
  );
};

export default Home;



