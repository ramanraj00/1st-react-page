
const CallBackCard = () => {

    return (

        <section className="bg-[#EAEFF7] h-full flex justify-around item-center  ">{/* Outer Section Start*/}

            <div className="flex item-center"> {/* Left-Child-Div */}
                <img className="h-70" src="https://asset.allen.in/dccd40f4-6c9d-4d84-8dc5-287391ec51a2/original.webp?__ar__=0.981595" alt="" />
            </div>

            <div className="flex shadow-xl/30 w-3xl space-x-20  justify-center items-center"> {/* Right-Child-Div */}

                   

                   <div className="space-y-1.5"> {/* Left-Sub-Child-Div */}
                    <h2>Student's full name*</h2>
                    <input
                     placeholder="      Ex:Rohit Singh"
                     type="text"
                     className="border-3 border-gray-300  rounded-lg w-xs  h-11 bg-white"
                      />
                    <h2>Class*</h2>
                     <input
                     placeholder="      12th+"
                     type="text"
                     className="border-3 border-gray-300 rounded-lg w-xs  h-11 bg-white"
                      />
                    <h2>Preferred Courses*</h2>
                     <input
                     placeholder="      Online Courses"
                     type="text"
                     className="border-3 border-gray-300 rounded-lg w-xs  h-11 bg-white" 
                      />
                   </div>

                   <div className="space-y-1.5"> {/* Right-Sub-Child-Div */}
                  <h2>Mobile Number*</h2>
                    <input
                     placeholder="      Ex:+9176257862"
                     type="text"
                     className="border-3 border-gray-300 rounded-lg w-xs  h-11 bg-white"
                      />
                    <h2>Goals*</h2>
                     <input
                     placeholder="      NEET"
                     type="text"
                     className=" border-3 border-gray-300 rounded-lg w-xs  h-11 bg-white"
                      />
                    <h2>Online Course*</h2>
                     <input
                     placeholder="      Andman And Nicobar Islands"
                     type="text"
                     className="border-3 border-gray-300 rounded-lg w-xs hover:border-black focus:border-black hover:placeholder-black h-11 bg-white"
                      />
                   </div>

                

            </div> {/* Right-Child-Div-End */}

                   
     
     
       </section>

    )
}

export default CallBackCard;