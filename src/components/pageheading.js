import React from 'react'

const PageHeading = ({ title, subheading }) => {
  return (
    <>
        <div className="pb-16">
            <h1 className="w-full text-center text-4xl sm:text-6xl lg:text-7xl mb-3">{title}</h1>
            <p className=" text-sm w-[90%] text-gray-400 text-center mx-auto pt-3">{subheading}</p>
        </div>
    </>
  )
}

export default PageHeading