import Button from "../(general components)/button";

const SetAssessmentForm = () => {
  return (
    <div>
        {/* input areas */}
        <div className="relative mb-10 mt-6 text-base">
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">assessment</p>
                <div className="rounded-xl bg-white mb-1">
                    <input type={`text`} className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none "/>
                </div>
                <p className="text-sm text-center text-gray-400">test, assignment, exam...</p>
            </div>
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">assessment title</p>
                <div className="rounded-xl bg-white mb-1">
                    <input type={`text`} className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none "/>
                </div>
                <p className="text-sm text-center text-gray-400"></p>
            </div>
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">total score</p>
                <div className="rounded-xl bg-white mb-1">
                    <input type={`text`} className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none "/>
                </div>
            </div>
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">percent towards term mark</p>
                <div className="rounded-xl bg-white mb-1">
                    <input type={`text`} className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none "/>
                </div>
            </div>
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">topics</p>
                <div className="rounded-xl bg-white mb-1">
                    <input type={`text`} className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none "/>
                </div>
                <p className="text-sm text-center text-gray-400">separate topics with a comma ( , )</p>
            </div> 
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">due date</p>
                <div className="rounded-xl bg-white mb-1">
                    <input type={`text`} className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none "/>
                </div>
                <p className="text-sm text-center text-gray-400">in the form dd/mm/yyyy</p>
            </div>
        </div>
        {/* button */}
        <Button title={'set'} type={'submit'} />
    </div>
  )
};

export default SetAssessmentForm;