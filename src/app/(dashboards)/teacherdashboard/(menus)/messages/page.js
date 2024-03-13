// components 
import Crumbs from "@/components/crumbs";
import PageHeading from "@/components/(general components)/pageheading";
import Messages from "@/components/(messages components)/messages";
import Aligner from "@/components/(general components)/aligner";

const MessagesPage = () => {
  return (
    <div className="w-full relative grid grid-cols-1 place-content-center">
      <Aligner/>
      <Crumbs url={`teacherdashboard`} title={`dashboard`} hide={true} heading={`chats`}/>
      <PageHeading title={'Chats'} />
      <Messages dashboard={'teacher'}/>
      <p className=" text-sm w-[80%] text-gray-500 text-center mx-auto py-10">all caught up..</p>
    </div>
  )
};

export default MessagesPage;