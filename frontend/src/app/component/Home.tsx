"use client"
import Image from 'next/image';
import Gif from '../../../public/glowwww.gif';
import { useRouter } from 'next/navigation';

const MainPage = () => {
    const route = useRouter();

    const redirect = ()=>{
        route.push('/contact')
    }
    return (
        <div className="w-screen h-screen relative">
            {/* Background GIF */}
            <Image
                src={Gif}
                alt="Example GIF"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />

            {/* Animated Button */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <button className="bg-[#7745EC] text-white px-6 py-3 rounded-full shadow-md 
                           hover:bg-blue-700 hover:scale-105 hover:shadow-lg 
                           active:scale-95 
                           transition-transform duration-300 ease-out 
                           animate-pulse" onClick={redirect}>
                    Get in Touch
                </button>
            </div>
        </div>
    );
};

export default MainPage;
