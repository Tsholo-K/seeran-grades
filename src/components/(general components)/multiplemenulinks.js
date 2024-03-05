import SingleMenuLink from "./signlemenulink";

const MultipleMenuLinks = ({ menu }) => {
  
    const menulength = menu.section.length
  
    return (
      <>
        <div className="rounded-xl my-7 bg-white">
          <>
            {
              menu.section.map( ( item, index ) => (
                  <>
                    <>
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
                      
                    </>
                  </>
              ))
            }
          </>
        </div>
      </>
    )
  };

  export default MultipleMenuLinks;