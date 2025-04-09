import React from "react";

const FileInput = ({ setValue }) => {
    return (
        <input
            type="file"
            className="w-[215px] text-sm border-0 border-b border-[var(--blackColor-300)] bg-transparent
            placeholder:text-sm placeholder:text-[var(--textColor-tertiary)]
            focus:placeholder:text-transparent focus:outline-none focus:border-[var(--blackColor-500)] focus:bg-transparent"
            onChange={(e) => setValue(e.target.files[0])}
        />
    );
};

export default FileInput;