const InputArea = ({ title, placeholder='', type }) => {
  return (
    <>
        <div className="py-2">
          <p className="text-sm text-gray-400 pl-2 py-1">{title}</p>
          <div className="rounded-xl bg-white mb-1">
              <input
              type={`${type}`}
              className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none "
              />
          </div>
          <p className="text-sm text-center text-gray-400">{placeholder}</p>
        </div>
    </>
  )
};

export default InputArea;