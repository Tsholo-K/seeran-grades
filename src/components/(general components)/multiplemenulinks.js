import SingleMenuLink from "./signlemenulink";

const MultipleMenuLinks = ({ menu }) => {
  
  const menulength = menu.section.length

  return (
    <div className="rounded-xl my-4 bg-white">
      {
        menu.section.map( ( item, index ) => (
          <div key={index}>
            {
              ( menulength > 1 && index !== menulength - 1 )
              ? (
                <>
                  <SingleMenuLink key={index} title={item.title} url={item.url} icon={item.icon}/>
                  <hr className="mx-5"></hr>
                </>
              )
              : (
                <>
                  <SingleMenuLink key={index} title={item.title} url={item.url} icon={item.icon}/>
                </>
              )
            }
          </div>
        ))
      }
    </div>
  )
};

export default MultipleMenuLinks;