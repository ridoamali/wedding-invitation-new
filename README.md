# React + TypeScript + Vite

Menggunakan PNPM
Editing masih di sisi kanan atau di app.tsx lengkapi sectionnya dulu dan perbaiki warna kombinasi
Next perlu di tambahi animasi agar lebih smooth
Tambahi koneksi ke SPreadsheet
tambahi konek ke database
tambahi koneksi ke API

perbaiki /assets/background-homew.jpg menjadi background yang jika baris kodingan ditambah, maka tetap bisa menyesuaikan tingginya
/assets/pexels-oneprophoto-photo-cinema-16098067-768x960.jpg menjadi seukuran dan pas dengan /assets/couple-frame-mirror.png
/assets/orn-save-date-1.png berada di sisi kiri dan kanan /assets/couple-frame-mirror.png
perbaiki layouting agar rapi dan tidak berantakan pada semua jenis ukuran layar baik desktop sampai mobile devices
perbaiki semua class "translate-" yang menjadikan tampilan tidak rapi pada ukuran layar mobile device tertentu



backup
{/* Section image with frame and mirror */}
            <div className='relative h-screen'>
              {/* Background Layer */}
              <div className='absolute inset-0 bg-[url(/assets/background-homew.jpg)] bg-cover bg-center bg-no-repeat h-screen'></div>
              
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


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
