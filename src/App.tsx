import { FaCalendarDay, FaMapMarkedAlt, FaWifi } from 'react-icons/fa';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import './App.css'
import ImageSlider from './components/ImageSlider';
import SisiKiri from './components/SisiKiri';
import { MdLocationPin } from 'react-icons/md';
import Countdown from 'react-countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const images = [
  {
    url: '/assets/pexels-oneprophoto-photo-cinema-16098066.jpg',
    alt: 'Image 1',
    size: 'large',
  },
  {
    url: '/assets/pexels-oneprophoto-photo-cinema-16098077-scaled.jpg',
    alt: 'Image 2',
  },
  {
    url: '/assets/pexels-oneprophoto-photo-cinema-16098073.jpg',
    alt: 'Image 3',
  },
  {
    url: '/assets/pexels-oneprophoto-photo-cinema-16098070.jpg',
    alt: 'Image 4',
  },
  {
    url: '/assets/pexels-oneprophoto-photo-cinema-16098074.jpg',
    alt: 'Image 5',
  },
  {
    url: '/assets/pexels-oneprophoto-photo-cinema-16098076-scaled.jpg',
    alt: 'Image 6',
  },
]

function App() {
  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Left side - Fixed 70% - Hidden on mobile/tablet */}
      <SisiKiri />
      
      {/* Right side - Scrollable 30% - Full width on mobile/tablet */}
      <div className='w-full lg:w-[30%] lg:ml-[70%] min-h-screen overflow-y-auto bg-white'>
        <div className='lg:p-0'>
          {/* Mobile/Tablet Header */}
          <div className='relative'>
          <ImageSlider />
          <div className='absolute -bottom-3/4 left-0 w-full h-full transition duration-1000 ease-in'>
            <div className='flex flex-col gap-y-[19px] text-center bg-linear-to-b from-orange-10/10 to-[#d8cfc9]/90'>
              <span className='text-xl text-white font-thin parisienne-regular'>The Wedding of</span>
              <span className='text-4xl text-white font-normal'>ALISA & RIZKY</span>
              <hr className='text-white w-1/2 mx-auto' />
              <span className='text-white text-[12px] font-thin text-center px-5 font-[Arapey]'>And one of His signs is that He created mates for you from yourselves that you may find rest in them, and He put between you love and compassion; most surely there are signs in this for a people who reflect.</span>
              <span className='text-white text-[12px] font-normal text-center px-5'>- QS. AR-RUM 21 -</span>
            </div>
          </div>
          </div>
          
          
          {/* Scrollable content */}
          <div className='flex flex-col'>

            {/* Section image with frame and mirror */}
            <div className='relative min-h-screen w-full flex flex-col items-center justify-center py-20'>
              {/* Background Layer */}
              <div className='absolute inset-0 bg-[url(/assets/background-homew.jpg)] bg-cover bg-center bg-no-repeat w-full h-full'></div>
              
              {/* Main Content Container */}
              <div className='relative w-full max-w-4xl mx-auto px-4 flex flex-col items-center'>

                {/* Frame and Photo Container */}
                <div className='relative w-full aspect-[3/4] max-w-lg'>
                  {/* Photo Layer - Positioned to fit inside frame */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-[65%] h-[58%] bg-[url(/assets/pexels-oneprophoto-photo-cinema-16098067-768x960.jpg)] bg-cover bg-center bg-no-repeat'></div>
                  </div>
                  
                  {/* Frame Layer */}
                  <div className='absolute inset-0 bg-[url(/assets/couple-frame-mirror.png)] bg-contain bg-center bg-no-repeat w-full h-[80%] mt-12'></div>
                  
                  {/* Ornament Layer */}
                  <div className='absolute inset-0 w-full'>
                    {/* Left Ornament */}
                    <div className='absolute left-0 top-1/2 -translate-x-2 md:-translate-x-2 -translate-y-1/2'>
                      <div className='w-32 h-72 md:w-32 md:h-72 bg-[url(/assets/orn-save-date-1.png)] bg-contain bg-center bg-no-repeat'></div>
                    </div>
                    {/* Right Ornament */}
                    <div className='absolute right-0 top-1/2 translate-x-2 md:translate-x-2 -translate-y-1/2'>
                      <div className='w-32 h-72 md:w-32 md:h-72 bg-[url(/assets/orn-save-date-1.png)] scale-x-[-1] bg-contain bg-center bg-no-repeat'></div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className='mt-8 text-center'>
                  {/* Text Overlay - Women */}
                  <div className='mb-6'>
                    <div className='text-3xl md:text-2xl text-black font-normal'>PUTRI</div>
                    <div className='text-3xl md:text-2xl text-black font-normal'>FULANAH</div>
                    <div className='text-sm md:text-2xl text-black font-thin italic my-2'>The Daughter of</div>
                    <div className='text-md md:text-2xl text-black font-thin'>Mr. Reynald Robert</div>
                    <div className='text-md md:text-2xl text-black font-thin'>& Mrs. Felia Lenita</div>
                  </div>

                  {/* AND Text */}
                  <div className='mb-6 my-20'>
                    <span className='text-4xl md:text-2xl text-black font-thin parisienne-regular'>And</span>
                  </div>
                </div>

                {/* Frame and Photo Container COWOK */}
                <div className='relative w-full aspect-[3/4] max-w-lg'>
                  {/* Photo Layer - Positioned to fit inside frame */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-[65%] h-[58%] bg-[url(/assets/pexels-oneprophoto-photo-cinema-16098066-Copy-699x1024.jpg)] bg-cover bg-center bg-no-repeat'></div>
                  </div>
                  
                  {/* Frame Layer */}
                  <div className='absolute inset-0 bg-[url(/assets/couple-frame-mirror.png)] bg-contain bg-center bg-no-repeat w-full h-[80%] mt-12'></div>
                  
                  {/* Ornament Layer */}
                  <div className='absolute inset-0 w-full'>
                    {/* Left Ornament */}
                    <div className='absolute left-0 top-1/2 -translate-x-2 md:-translate-x-2 -translate-y-1/2'>
                      <div className='w-32 h-72 md:w-32 md:h-72 bg-[url(/assets/orn-save-date-1.png)] bg-contain bg-center bg-no-repeat'></div>
                    </div>
                    {/* Right Ornament */}
                    <div className='absolute right-0 top-1/2 translate-x-2 md:translate-x-2 -translate-y-1/2'>
                      <div className='w-32 h-72 md:w-32 md:h-72 bg-[url(/assets/orn-save-date-1.png)] scale-x-[-1] bg-contain bg-center bg-no-repeat'></div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className='mt-8 text-center'>
                  {/* Text Overlay - Men */}
                  <div className='mb-6'>
                    <p className='text-3xl md:text-2xl text-black font-normal'>PUTRA</p>
                    <p className='text-3xl md:text-2xl text-black font-normal'>FULAN</p>
                    <p className='text-sm md:text-2xl text-black font-thin italic my-2'>The Son of</p>
                    <p className='text-md md:text-2xl text-black font-thin'>Mr. Reynald Robert</p>
                    <p className='text-md md:text-2xl text-black font-thin'>& Mrs. Felia Lenita</p>
                  </div>


                </div>
              </div>
            </div>

            {/* Section Our journey */}
            <div className='p-4 py-10 flex flex-col items-center gap-y-4 bg-[#d8cfc6] text-[#66574c] text-sm '>
              <div className='text-3xl font-normal'>Our Journey</div>
                <div className='flex justify-center items-center w-full h-full aspect-[16/9] max-w-lg inset-0 '>
                  <div className='bg-[url(/assets/pexels-oneprophoto-photo-cinema-16098072-768x442.jpg)] bg-contain bg-center bg-no-repeat w-full h-full rounded-3xl'></div>
                </div>
              <span className='text-justify'>2019, we started our journey as two individuals who were just getting to know each other. We were excited to explore what the future held for us and were eager to see where our paths would lead.</span>
              <span className='text-justify'>In 2020, we continued our journey, facing challenges and obstacles along the way. We learned how to communicate effectively and work together as a team, and our relationship grew stronger as a result. And now,</span>
              <span className='text-justify'>in 2023, we have reached the pinnacle of our journey – marriage. It has been a joyous and exciting ride filled with laughter, love, and endless possibilities. We have made countless memories together, from our first date to our engagement, and now our wedding day. Our journey has been a fulfilling one, and we are grateful for every moment we have shared. We look forward to continuing our adventure as a married couple, creating new experiences, and making even more memories together.</span>
            </div>

            {/* Section Wedding Event */}
          <div className='relative min-h-screen w-full flex flex-col items-center justify-center py-10 md:py-10'>
          <div className='overflow-hidden h-full'>
            <div className='absolute bg-cover bg-center inset-0 bg-[url(/assets/pexels-oneprophoto-photo-cinema-16098070.jpg)] w-full h-full brightness-50 '></div>
          </div>
          <div className='relative text-center w-full h-full items-center p-5 '>
            <div className='flex flex-col gap-2 text-center items-center text-white gap-y-10'>
              <span className='text-4xl parisienne-regular'>Wedding Event</span>
              <span className='text-2xl font-thin '>Saturday, 06
              May 2025</span>
              <span className=' text-sm text-center '>19.00 - 21.00 WIB</span>
              <FaMapMarkedAlt className='text-2xl' />
              <span className=' text-lg text-center uppercase'>The Papandayan Hotel</span>
              <span className='text-lg font-thin'>Jl. Gatot Subroto No.83, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262</span>
              <div className='inline-flex'>
                <MdLocationPin className='text-xl' />
              <span className='text-sm font-thin '>OPEN MAPS</span>
              </div>
              <hr className=' w-1/2 mx-auto' />

              {/* COUNTDOWN JAVASCRIPT REACT */}
              <Countdown 
              autoStart
              date='2026-02-01T01:02:03'
              className='text-2xl'
               />
              <div className='inline-flex'>
                <FaCalendarDay className='text-xl' />
              <span className=' text-sm font-thin text-center '>ADD TO CALENDAR</span>
              </div>
              <hr className=' w-1/2 mx-auto' />
              <span className=' text-4xl font-thin text-center parisienne-regular'>Live Streaming</span>
              <span className=' text-sm font-thin text-center '>We also plan to publish our wedding virtually via Youtube which you can follow via the folling link</span>
              <div className='inline-flex'>
                <FaWifi className='text-xl' />
              <span className=' text-sm font-thin text-center '>JOIN STREAMING</span>

              </div>
              <hr className=' w-1/2 mx-auto' />
            </div>
          </div>
          </div>
          
          {/* RESERVATION SECTION */}
          <div className='bg-[url(/assets/background-homew.jpg)] h-screen p-4'>
          <div className='flex flex-col gap-2 gap-y-5 my-10 text-[#66574c] '>
            <span className='uppercase text-2xl'>Reservation</span>
            <span className='text-sm font-light'>Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form:</span>
            {/* FORM SIMPLE */}
            <form className=''>
              <label>
                Nama
                <br />
                <input type="text" name="name" className=' border-b-1' />
              </label>
              <br />
              <button type='submit' className='bg-[#66574c] w-15 h-8 rounded-xl text-sm mt-5 text-[#d8cfc6]' >Kirim</button>
            </form>
            {/* Isi nama, kehadiran yes/no, jumlah tamu */}

            <span className='uppercase text-2xl'>Wedding Gift</span>
            <span className='text-sm font-light'>For family and friends who would like to send a gift. We would be glad to receive it. Tap the following buttons to send them to us:</span>
            <button type='submit' className='bg-[#66574c] w-20 h-10 rounded-xl text-[#d8cfc6]' >Kirim</button>
            </div>
          </div>

            {/* GALLERY SECTION */}
            <div className='p-1 flex flex-col items-center gap-y-1 bg-[#d8cfc6] text-center  '>
              <div className='flex flex-col '>
                <span className='text-2xl font-bold'>Gallery</span>
                <span className='text-sm font-thin'>Our wedding photos will be uploaded here soon</span>
                <div className='grid grid-cols-2 gap-0'>
                  {images.map((image, index) => (
                    <div key={index} className=''>
                      <img src={image.url} alt={image.alt} className='object-cover size-full rounded-sm ' />
                    </div>
                  ))}
                </div>
                <span className='text-[10px] italic font-thin text-center'>Photos from : @ONEPROPHOTO</span>
              </div>
            </div>

          {/* KOMEN BEST WISHES */}
          <div className='p-4 flex flex-col items-center gap-y-4 bg-[#d8cfc6] text-center py-10'>
            <div className='flex flex-col'>
              <span className='text-2xl font-bold'>Your Best Wishes</span>
              <span className='text-sm font-thin'>Kindly express your best wishes by using the form provided below. Thank you.</span>
              {/* Form komentar nama, wishes, konfirmasi kehadiran */}
              {/* tampilkan komen komen dummy */}
            </div>
          </div>

          {/* FOOTER */}
          <div className='p-4 flex flex-col items-center gap-y-4 bg-[#d8cfc6] text-center'>
            <div className='flex flex-col'>
              <span className='text-2xl font-bold'>Thank You!</span>
              <span className='text-sm font-thin mb-50'>It is a pleasure and honor for us, if you are willing to attend and give us your blessing.</span>
              <span>Made with 
                 <FontAwesomeIcon icon={faHeart} className='text-red-600' />
                 for you
              </span>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App