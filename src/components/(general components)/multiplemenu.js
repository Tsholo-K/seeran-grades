import Menu from "./menu";


const MultipleMenu = ({ menu, money=false }) => {
  
    const menulength = menu.length
  
    return (
      <div className="rounded-xl my-7 bg-white">
        {
          menu.map( ( item, index ) => (
            <div key={index}>
              {
                ( menulength > 1 && index !== menulength - 1 )
                ? (
                  <>
                      <Menu title={item.title} info={item.info} money={money} icon={item.icon}/>
                      <hr className="mx-5"></hr>
                  </>
                )
                : (
                  <>
                      <Menu title={item.title} info={item.info} money={money} icon={item.icon} />
                  </>
                )
              }                  
          </div>
          ))
        }
      </div>
    )
  };

  export default MultipleMenu;