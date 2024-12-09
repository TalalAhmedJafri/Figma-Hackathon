export default function WhyChooseUs () {
    return(
        <div className="flex pt-[100] px-[300]">

           <div className=" space-y-4 w-1/2">
              <span className="flex space-x-4">
                  <span>
                     <img src="/images/image1.png"className="h-[356] w-[362]"/>
                  </span>
                  <span className="flex items-end">
                     <img src="/images/image2.png" className="h-[231] w-[281]"/>
                  </span>
              </span>
              <span className="flex space-x-4">
                 <img src="/images/image3.png" className="h-[306] w-[224]"/>
                 <img src="/images/image4.png" className="h-[226] w-[221]"/>
                 <span className="flex-col">
                     <img src="/images/image5.png" className="h-[168] w-[161]"/>
                     <img src="/images/image6.png" className="h-[168] w-[161]"/>
                 </span>
              </span>
           </div>
           <div className="flex flex-col justify-center items-center pl-32 w-1/2">
              <span>
                <h1 className="text-text text-[32px]">
                  Why Choose us
                </h1>
                <h1 className=" font-bold text-[48px]">
                  <span className="text-text">Ex</span>ta ordinary taste And Experienced 
                </h1>
                <p className="text-[16px]">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                 Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                 Ultrices mattis sed vitae mus risus. Lacus nisi,
                 et ac dapibus sit eu velit <br/>in consequat.
                </p>
              </span>
              <span className="flex space-x-10  pt-20">
                 <span className=" flex flex-col items-center text-[18px]">
                   <img src="/images/icon4.png" className=" bg-text p-5 rounded-md"/>
                   <h3>Fast Food</h3>
                 </span>
                 <span className=" flex flex-col items-center text-[18px]">
                   <img src="/images/icon5.png"  className=" bg-text p-5 rounded-md"/>
                   <h3>Lunch</h3>
                 </span>
                 <span className=" flex flex-col items-center text-[18px]">
                   <img src="/images/icon6.png"  className=" bg-text p-5 rounded-md"/>
                   <h3>Dinner</h3>
                 </span>
              </span>
              <span className="flex border-l-[10px] border-text bg-white pr-14 mt-8 rounded-md">
                <span className="w-1/2 px-5">
                  <h1 className="font-bold text-[48px] text-text">30+</h1>
                </span>
                <span className="w-1/2 text-black">
                  <p className="text-[20px]">Years of</p>
                  <h1 className="font-bold text-[24px]">Experienced</h1>
                </span>
              </span>
           </div>

        </div>
    )
}