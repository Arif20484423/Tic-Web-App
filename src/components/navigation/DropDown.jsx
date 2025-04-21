'use cleint'
import React from 'react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import OptionButton from './OptionButton'
const DropDown = ({heading, options}) => {
    const [activeDropDown, setActiveDropDown] = useState(false);
    const [activeOption, setActiveOption] = useState(1);
    const router = useRouter();
  return (
    <div>
        <div className='flex flex-col gap-[10px]'>
            <h1 className={`w-[180px] text-[12px] flex items-center gap-x-2 p-2 cursor-pointer rounded-md transition-all duration-300 ml-5${
                activeDropDown
                ? "text-[var(--textColor-white)] font-bold"

                : "text-[var(--textColor-disables)]"
            } hover:text-[var(--textColor-white)] hover:font-medium `}onClick={setActiveDropDown(!activeDropDown)}>
        {heading}
        </h1>
            {
            activeDropDown && 
                <div className='flex flex-col gap-[5px]'>
                    {options.map((option) => (
                        <OptionButton
                            key={option.id}
                            icon={option.icon}
                            isActive={activeOption === option.id}
                            onClick={() => {
                            setActiveOption(option.id);
                            router.push(option.page);
                        }}>
                    <span>{option.label}</span>
                </OptionButton>
                ))}
            </div>
        }    
        </div>
    </div>
  )
}

export default DropDown