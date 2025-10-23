const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullwidth, fontSize }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-8 py-3 font-montserrat text-lg leading-none
      ${backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-[orange] text-black font-semibold"} rounded-full 
      ${fullwidth ? 'w-full' : ''}
      ${fontSize ? fontSize : "text-sm"}
      `}>

        {label}

        {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button