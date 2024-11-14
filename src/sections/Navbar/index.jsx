import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  { title: "About", sectionId: "content-About" },
  { title: "Experience", sectionId: "content-Experience" },
  { title: "Project", sectionId: "content-Project" },
  { title: "Article", sectionId: "content-Article" },
];

const Navbar = () => {
  const [isMouseEnter,setIsMouseEnter] = useState({})
  const handleClick = (sectionId) => {
    console.log(sectionId);
    document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
  };
  return (
    <div className="flex flex-col font-semibold"    
    >
      {navs.map((e, i) => (
        <div 
          key={`nav-${e}-${i}`}
          onClick={()=>handleClick(e.sectionId)}
          onMouseEnter={()=>setIsMouseEnter({[e.title]:true})}
          onMouseLeave={()=>setIsMouseEnter({[e.title]:true})}
          className="cursor-pointer flex items-center py-3"
        >
          <FontAwesomeIcon
            className={`mr-2 text-primaryTitle ${!isMouseEnter[e.title]? "hidden":""}`}
            icon={faArrowRight}
          />
          <div className={`duration-500 ease-out ${isMouseEnter[e.title]? "translate-x-4":""}`}>
            {e.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
