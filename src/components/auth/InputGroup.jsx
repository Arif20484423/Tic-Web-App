import React from "react";
import Input from "./Input";

const InputGroup = ({inputs}) =>{
    return (
        <div className=" flex flex-col gap-y-[25px]">
            {inputs.map((config) =>(
                <Input key={config.name} config={config}></Input>
            ))}
        </div>
    );
};

export default InputGroup;