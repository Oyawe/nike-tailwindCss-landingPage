const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:bg-[#8aa4ed] transition ease-out
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor}${borderColor}`
          : "bg-[#B8C5F9] text-white border-[#B8C5F9]"
      } rounded-full ${fullWidth && "w-full"}"}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5 " />
      )}
    </button>
  );
};

export default Button;
