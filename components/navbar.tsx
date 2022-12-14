import { useEffect, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return (
      <nav className={`fixed re h-14 w-screen flex items-center z-50 transition-all duration-700 md: 
                            ${scrollPosition > 0 ? 'bg-white shadow-lg' : 'bg-transparent'}`}
                            >

          <div className="absolute flex justify-between min-w-full h-14 transition-all duration-5000 mt-0 md:-mt-96 duration-1000">
            <div className="pl-10 pt-2">
            {scrollPosition > 0 ? <img className="h-auto w-10" src="omen-blue.png" alt="" /> : <img className="h-auto w-10" src="omen-white.png" alt="" /> }
               
              
            </div>            
            <div className={`text-white pt-3 pr-10 text-3xl transition-all duration-5000 mt-0 md:-mt-96 duration-1000
                            ${scrollPosition > 0 ? 'text-blue' : 'text-white '}`}>
            <GiHamburgerMenu />
            </div>
          </div>

          <div className="flex justify-between min-w-full h-14bg-orange transition-all duration-5000 -mt-96 md:mt-0 duration-1000">
            <h1 className={`pl-10 items-center text-white font-bold text-2xl md:whitespace-nowrap
                            ${scrollPosition > 0 ? 'text-blue' : 'text-white '}`}
                            >
                O M E N
            </h1>          
             <h1 className={`pl-2 items-center text-white text-2xl md:whitespace-nowrap
                            ${scrollPosition > 0 ? 'text-blue' : 'text-white '}`}
                            >
                D I G I T A L
            </h1>
            <ul className={`flex ml-auto pl-10 text-m text-white whitespace-nowrap transition-all duration-5000 -mt-96 md:mt-0  duration-1000
                             ${scrollPosition > 0 ? 'text-blue' : 'text-white '}`}
                            >
                <li className="pr-10">Home</li>
                <li className="pr-10">Why</li>
                <li className="pr-10">How</li>
                <li className="pr-10">Who</li>
                <li className="pr-10">Contact</li>
            </ul>
          </div>



        </nav>
    );
}


export default Navbar;