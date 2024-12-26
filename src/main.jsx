import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import FooterComponent from "./components/FooterComponent.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <main>
            <div className="flex h-screen w-full items-center justify-center p-4 align-middle text-slate-200">
                <div className="h-1/2 w-1/2 border-2 drop-shadow rounded-xl p-5 bg-stone-900">
                    <h1 className="text-7xl font-bold underline mb-5">jqnn.</h1>
                    <p className="text-2xl">fulltime backend developer</p>
                    <p className="text-2xl">parttime frontend developer</p>
                    <p className="text-2xl">still in school</p>
                    <p className="text-2xl">working in it</p>
                </div>
                <FooterComponent/>
            </div>
        </main>
    </StrictMode>
)