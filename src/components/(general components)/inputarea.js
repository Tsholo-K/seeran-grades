const InputArea = ({ title, type }) => {
  return (
    <>
        <>
        <p className="text-sm text-gray-400 pl-2 py-1">{title}</p>
        <div className="rounded-xl bg-white mb-1">
            <input type={`${type}`} className="w-full rounded-xl h-10 px-3 focus:outline-none"/>
        </div>
        </>
    </>
  )
};

export default InputArea;