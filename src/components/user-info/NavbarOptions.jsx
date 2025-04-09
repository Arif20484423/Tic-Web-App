'use client'
import React,{useState} from "react"
import OptionButton from "./OptionButton";
const NavbarOptions = () =>{
    const [activeOption, setActiveOption] = useState(4);
    const options=[
        {id:1,label:'Dashboard',icon:""},
        {id:2,label:'Information',icon:""},
        {id:3,label:'Companies',icon:""},
        {id:4,label:'Settings',icon:""},
    ];
    
    return (
      <div className="w-[180px] flex flex-col gap-y-2">
        {options.map((option)=>(
            <OptionButton
                key={option.id}
                isActive={activeOption === option.id}
                onClick={() => setActiveOption(option.id)}
            >
            <span>{option.label}</span>
          </OptionButton>
        ))}
        
    
      </div>
    );
}
export default NavbarOptions;