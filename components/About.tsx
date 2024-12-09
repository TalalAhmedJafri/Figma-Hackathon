

export default function About () {
    return(
        <div className=" flex pt-[100] px-[300]">
            <div className="w-1/2 space-y-5">
                <h1 className="text-[32px] text-text">About us</h1>
                <h1 className="font-bold text-[48px] pr-36"><span className="text-text">We</span> Create the best foody product</h1>
                <p className="text-[16px] pr-36">
                    Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Quisque diam pellentesque 
                     bibendum non dui volutpat fringilla bibendum. 
                     Urna, elit augue urna, vitae feugiat pretium donec
                      id elementum. Ultrices mattis sed vitae mus risus. 
                      Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <p className="flex items-center space-x-3">
                    <span>
                      <img src="/images/icon3.png"/> 
                    </span>
                    <span className="text-[18px]">
                      Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </span>  
                </p>
                <p className="flex items-center space-x-3">
                    <span>
                      <img src="/images/icon3.png"/> 
                    </span>
                    <span className="text-[18px]">
                      Quisque diam pellentesque bibendum non dui volutpat fringilla 
                    </span>  
                </p>
                <p className="flex items-center space-x-3">
                    <span>
                      <img src="/images/icon3.png"/> 
                    </span>
                    <span className="text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>  
                </p>
                <button className='rounded-[30px] bg-text px-[60] py-4'>Read More</button>
            </div>
            <div className="grid-cols-4 row-span-3 flex flex-col justify-center items-center space-y-4 w-/2">
               <span>
                  <img src="/images/frame1.png"/>
               </span>
               <span className="flex space-x-4">
                  <img src="/images/frame2.png"/>
                  <img src="/images/frame3.png"/>
               </span>

            </div>
        </div>
    )
}