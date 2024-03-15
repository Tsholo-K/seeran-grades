import Image from "next/image";

const Topics = ({ topics }) => {
  return (
    <div className="bg-white rounded-xl px-4 py-3">
        <p className="text-center text-lg lg:text-2xl">Topics</p>
        {
            topics.map( (topic, index) => (
            <div key={index} className="flex gap-3 pt-2">
              <Image src={`/topics.svg`} alt="topics" width={10} height={10} className="h-6 w-6"/>
              <p className="text-gray-400 text-sm lg:text-base grid grid-cols-1 place-content-center">{topic}</p>
            </div>
          ))
        }
      </div>
  )
};

export default Topics;