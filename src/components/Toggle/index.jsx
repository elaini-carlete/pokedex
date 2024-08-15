import { useState } from 'react';
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";

function Toggle() {
    const [theme, setTheme] = useState('light'); 

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'; 
        setTheme(newTheme);
    };

    return (
        <div className={`rounded p-2 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${theme === 'light' ? 'bg-transparent' : 'bg-black'}`}>
                <img
                    src={theme === 'light' ? moon : sun} 
                    alt={theme === 'light' ? 'moon' : 'sun'}
                    className={`cursor-pointer transition-all duration-300 ${
                        theme === 'light' 
                            ? 'w-5 h-5' 
                            : 'w-10 h-7'
                    }`}
                    onClick={toggleTheme}
                />
            </div>
        </div>
    );
}

export default Toggle;