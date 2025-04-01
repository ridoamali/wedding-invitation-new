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
            <div className='relative h-screen'>
              {/* Background Layer */}
              <div className='absolute inset-0 bg-[url(/assets/background-homew.jpg)] bg-cover bg-center bg-no-repeat h-[250%]'></div>
              
              {/* Photo Layer Women - Positioned to fit inside frame */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-[50%] h-[35%] bg-[url(/assets/pexels-oneprophoto-photo-cinema-16098067-768x960.jpg)] bg-cover bg-center bg-no-repeat'></div>
              </div>
              
              {/* Frame Layer */}
              <div className='absolute inset-0 bg-[url(/assets/couple-frame-mirror.png)] w-[60%] bg-contain bg-center bg-no-repeat mx-auto'></div>
              
              {/* Ornament Layer */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='absolute inset-0 bg-[url(/assets/orn-save-date-1.png)] bg-contain bg-no-repeat translate-x-10 translate-y-50 size-[40%]'></div>
                <div className='absolute inset-0 bg-[url(/assets/orn-save-date-1.png)] scale-x-[-1] bg-contain bg-no-repeat translate-x-48 translate-y-50 size-[40%]'></div>
              </div>
              
              {/* Text Overlay - Women */}
              <div className='relative z-10 flex flex-col gap-2 text-center translate-y-140'>
                <span className='text-xl text-black font-thin'>PUTRI</span>
                <span className='text-xl text-black font-thin'>FULANAH</span>
                <span className='text-xl text-black font-thin'>The Daughter of</span>
                <span className='text-xl text-black font-thin'>Mr. Reynald Robert</span>
                <span className='text-xl text-black font-thin'>& Mrs. Felia Lenita</span>
              </div>

              {/* AND Text */}
              <div className='relative z-10 flex flex-col gap-2 text-center translate-y-160'>
                <span className='text-xl text-black font-thin'>AND</span>
              </div>

              {/* Photo Layer Men - Positioned to fit inside frame */}
              <div className='absolute inset-0 flex items-center justify-center translate-y-180'>
                <div className='w-[50%] h-[35%] bg-[url(/assets/pexels-oneprophoto-photo-cinema-16098066-Copy-768x1126.jpg)] bg-cover bg-center bg-no-repeat'></div>
              </div>
              
              {/* Frame Layer - Men */}
              <div className='absolute inset-0 bg-[url(/assets/couple-frame-mirror.png)] w-[60%] bg-contain bg-center bg-no-repeat mx-auto translate-y-180'></div>
              
              {/* Ornament Layer - Men */}
              <div className='absolute inset-0 flex items-center justify-center translate-y-180'>
                <div className='absolute inset-0 bg-[url(/assets/orn-save-date-1.png)] bg-contain bg-no-repeat translate-x-10 translate-y-50 size-[40%]'></div>
                <div className='absolute inset-0 bg-[url(/assets/orn-save-date-1.png)] scale-x-[-1] bg-contain bg-no-repeat translate-x-48 translate-y-50 size-[40%]'></div>
              </div>

              {/* Text Overlay - Men */}
              <div className='relative z-10 flex flex-col gap-2 text-center translate-y-280'>
                <span className='text-xl text-black font-thin'>PUTRA</span>
                <span className='text-xl text-black font-thin'>FULAN</span>
                <span className='text-xl text-black font-thin'>The Son of</span>
                <span className='text-xl text-black font-thin'>Mr. Reynald Robert</span>
                <span className='text-xl text-black font-thin'>& Mrs. Felia Lenita</span>
              </div>
            </div>

            {/* Section Our Journey */}
            <div className='bg-stone-400/50 h-fit flex flex-col items-center justify-center mt-[245%] p-4 pb-10'>
              <h1 className='text-3xl font-thin mb-8'>Our Journey</h1>
              <div className='w-full max-w-2xl mb-8'>
                <div className='w-full h-[220px] bg-[url(/assets/pexels-oneprophoto-photo-cinema-16098072-768x442.jpg)] bg-cover bg-center bg-no-repeat rounded-lg'></div>
              </div>
              <div className='max-w-2xl text-justify'>
                <span className='text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae inventore atque rem ipsam amet doloremque illo. Quae vitae porro tempore cum laudantium iste vero voluptatum quibusdam officia dolor nemo totam debitis sequi,
                </span>
                <span className='text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae inventore atque rem ipsam amet doloremque illo. Quae vitae porro tempore cum laudantium iste vero voluptatum quibusdam officia dolor nemo totam debitis sequi,
                </span>
                <span className='text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae inventore atque rem ipsam amet doloremque illo. Quae vitae porro tempore cum laudantium iste vero voluptatum quibusdam officia dolor nemo totam debitis sequi,
                </span>
              </div>
            </div>

            
            {/* Section Wedding Event */}
            <div className='bg-stone-400/50 h-fit flex flex-col items-center justify-center -mt-4 p-4 pb-10'>
              <h1 className='text-3xl font-thin mb-8'>Our Journey</h1>
              <div className='w-full max-w-2xl mb-8'>
                <div className='w-full h-[220px] bg-[url(/assets/pexels-oneprophoto-photo-cinema-16098072-768x442.jpg)] bg-cover bg-center bg-no-repeat rounded-lg'></div>
              </div>
              <div className='max-w-2xl text-justify'>
                <span className='text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae inventore atque rem ipsam amet doloremque illo. Quae vitae porro tempore cum laudantium iste vero voluptatum quibusdam officia dolor nemo totam debitis sequi,
                </span>
                <span className='text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae inventore atque rem ipsam amet doloremque illo. Quae vitae porro tempore cum laudantium iste vero voluptatum quibusdam officia dolor nemo totam debitis sequi,
                </span>
                <span className='text-sm leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, beatae inventore atque rem ipsam amet doloremque illo. Quae vitae porro tempore cum laudantium iste vero voluptatum quibusdam officia dolor nemo totam debitis sequi,
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