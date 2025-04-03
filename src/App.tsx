import './App.css'
import ImageSlider from './components/ImageSlider';
import SisiKiri from './components/SisiKiri';

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
          <div className='absolute -bottom-3/4 left-0 w-full h-full'>
            <div className='flex flex-col gap-2 text-center'>
              <span className='text-xl text-white font-thin'>THE WEDDING OF</span>
              <span className='text-4xl text-white font-thin'>ALISA & RIZKY</span>
              <hr className='text-white w-1/2 mx-auto' />
              <span className='text-white text-[10px] font-light text-center px-5'>And one of His signs is that He created mates for you from yourselves that you may find rest in them, and He put between you love and compassion; most surely there are signs in this for a people who reflect.</span>
              <span className='text-white text-[10px] font-light text-center px-5'>- QS. AR-RUM 21 -</span>
            </div>
          </div>
          </div>
          
          
          {/* Scrollable content */}
          <div className='flex flex-col gap-4'>

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
                    <div className='absolute left-0 top-1/2 -translate-x-36 md:-translate-x-1/2 -translate-y-1/2'>
                      <div className='w-96 h-80 md:w-40 md:h-40 bg-[url(/assets/orn-save-date-1.png)] bg-contain bg-center bg-no-repeat'></div>
                    </div>
                    {/* Right Ornament */}
                    <div className='absolute right-0 top-1/2 translate-x-36 md:translate-x-1/5 -translate-y-1/2'>
                      <div className='w-96 h-80 md:w-20 md:h-40 bg-[url(/assets/orn-save-date-1.png)] scale-x-[-1] bg-contain bg-center bg-no-repeat'></div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className='mt-8 text-center'>
                  {/* Text Overlay - Women */}
                  <div className='mb-6'>
                    <p className='text-xl md:text-2xl text-black font-thin'>PUTRI</p>
                    <p className='text-xl md:text-2xl text-black font-thin'>FULANAH</p>
                    <p className='text-xl md:text-2xl text-black font-thin mt-2'>The Daughter of</p>
                    <p className='text-xl md:text-2xl text-black font-thin'>Mr. Reynald Robert</p>
                    <p className='text-xl md:text-2xl text-black font-thin'>& Mrs. Felia Lenita</p>
                  </div>

                  {/* AND Text */}
                  <div className='mb-6'>
                    <p className='text-xl md:text-2xl text-black font-thin'>AND</p>
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
                    <div className='absolute left-0 top-1/2 -translate-x-36 md:-translate-x-1/2 -translate-y-1/2'>
                      <div className='w-96 h-80 md:w-40 md:h-40 bg-[url(/assets/orn-save-date-1.png)] bg-contain bg-center bg-no-repeat'></div>
                    </div>
                    {/* Right Ornament */}
                    <div className='absolute right-0 top-1/2 translate-x-36 md:translate-x-1/5 -translate-y-1/2'>
                      <div className='w-96 h-80 md:w-20 md:h-40 bg-[url(/assets/orn-save-date-1.png)] scale-x-[-1] bg-contain bg-center bg-no-repeat'></div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className='mt-8 text-center'>
                  {/* Text Overlay - Women */}
                  <div className='mb-6'>
                    <p className='text-xl md:text-2xl text-black font-thin'>PUTRI</p>
                    <p className='text-xl md:text-2xl text-black font-thin'>FULANAH</p>
                    <p className='text-xl md:text-2xl text-black font-thin mt-2'>The Daughter of</p>
                    <p className='text-xl md:text-2xl text-black font-thin'>Mr. Reynald Robert</p>
                    <p className='text-xl md:text-2xl text-black font-thin'>& Mrs. Felia Lenita</p>
                  </div>

                  {/* AND Text */}
                  <div className='mb-6'>
                    <p className='text-xl md:text-2xl text-black font-thin'>AND</p>
                  </div>
                </div>


              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default App