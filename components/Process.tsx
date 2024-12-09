export default function Process () {
    return(
        <div className=" bg-banner-bg pt-[100] px-[300]">

           <div className="flex flex-col text-right justify-end items-center">
             <span>
                <h1 className="text-text text-[32px]">
                 Restaurant Active Process
                </h1>
                <h1 className="font-bold text-[48px]">
                 <span className="text-text">We</span> Document Every Food <br/> Bean Process untile it is saved
                </h1>
                <p className="text-[16px] pl-[700]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                 Urna, elit augue urna, 
                </p>
             </span>
           </div>
           <div>
               <span className="flex justify-end items-center space-x-5">
                  <span>
                      <button className='border-2 border-text rounded-[30px] px-[60] py-4'>Read More</button>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                     <button>
                      <img src="/images/play.png" className="border border-text bg-text rounded-full p-5"/>
                     </button>
                     <p className="font-bold text-[16px]">Play Video</p>
                   </span>  
               </span>
           </div>

        </div>
    )
}