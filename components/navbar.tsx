import { useEffect, useState } from "react";

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
        <nav className={`fixed h-14 min-w-full flex items-center z-50 transition-all duration-5000 
                            ${scrollPosition > 0 ? 'bg-white shadow-lg' : 'bg-transparent'}`}
                            >
            <h1 className={`pl-10 text-2xl items-center text-white font-bold
                            ${scrollPosition > 0 ? 'text-blue' : 'text-white '}`}
                            >
                O M E N
            </h1>          
             <h1 className={`pl-2 text-2xl items-center text-white
                            ${scrollPosition > 0 ? 'text-blue' : 'text-white '}`}
                            >
                D I G I T A L
            </h1>
            <ul className={`flex ml-auto pl-10 text-m text-white
                             ${scrollPosition > 0 ? 'text-blue' : 'text-white '}`}
                            >
                <li className="pr-10">Home</li>
                <li className="pr-10">Why</li>
                <li className="pr-10">How</li>
                <li className="pr-10">Who</li>
                <li className="pr-10">Contact</li>
            </ul>
        </nav>
    );
}


export default Navbar;