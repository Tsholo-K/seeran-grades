const Button = ({ primary_colour, secondary_colour, title, type }) => {
  return (
    <>
        <button 
        type={`${type}`} 
        className={`w-full border focus:bg-${secondary_colour} active:bg-${secondary_colour} hover:bg-${secondary_colour} border-white rounded-md bg-${primary_colour} text-white lg:hover:scale-[1.01] transition-all duration-500 py-1`}
        >
            {title}
        </button>
    </>
  )
};

export default Button;