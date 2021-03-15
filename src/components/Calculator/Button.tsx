import React from "react";
import s from "./Calculator.module.css"
import cn from "classnames";

interface ButtonProps {
    value:string,
    setInput:(value:string)=>void,
    img?:string,
    isBLack: boolean
}

const Button:React.FC<ButtonProps> = ({value, setInput, img, isBLack}) => {
    return (
       <>
           <button className={cn(s.buttonWhite, {[s.buttonBlack]: isBLack})} onClick={() => setInput(value)}>{img ? undefined : value}
           <img alt="" src={img} height={18}/>
           </button>
       </>
    )
}
export default Button;