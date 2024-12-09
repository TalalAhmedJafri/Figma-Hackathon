import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

export default function Footer () {
    return(
        <div className="space-y-10">

            <div className="flex pt-[100] px-[300] ">
                <span className="pl-20 w-1/2">
                    <h1 className="font-bold text-[32px]"><span className="text-text">St</span>ill You Need Our Support ?</h1>
                    <p className="text-[16px]">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </span>
                <span className="flex w-1/2 justify-end items-center">
                <input
                   type="text"
                   placeholder="Enter Your Emai" className="text-white bg-text border-text px-10 py-3"
               />
               <button className="text-text border  bg-white px-5 py-3">Subscribe Now</button>
                </span>
            </div>  
            <div className="border-b border-text"/> 
            <div className="flex">
                <span className="w-1/4 space-y-10">
                    <span className="space-y-10">
                    <h1 className="font-bold text-[24px]">
                    About Us.
                    </h1>
                    <p className="text-[16px]">
                        orporate clients and leisure travelers has
                        been relying on Groundlink for dependab
                        safe, and professional chauffeured car
                        service in major cities across World.
                    </p>
                    </span>
                    <span className="flex space-x-4">
                        <img src="/images/icon11.png" className="border border-text bg-text p-3 rounded-sm"/>
                        <span>
                            <p className="text-[18px]">Opening Houres</p>
                            <p className="text-[16px]">Mon - Sat(8.00 - 6.00)</p>
                            <p className="text-[16px]">Sunday - Closed</p>
                        </span>
                    </span>
                    

                </span>
                <span className="flex flex-col justify-start items-center w-1/4 space-y-10">
                  <h1 className="flex  font-bold text-[24px]">Useful Links</h1>
                  <span className="flex flex-col justify-start items-center space-y-5">
                  <button>About</button>
                  <button>News</button>
                  <button>Partners</button>
                  <button>Team</button>
                  <button>Menu</button>
                  <button>Contacts</button>
                  </span>

                </span>
                <span className="flex flex-col justify-start items-center w-1/4 space-y-10">
                  <h1 className="flex  font-bold text-[24px]">Help?</h1>
                  <span className="flex flex-col justify-start items-center space-y-5">
                  <button>FAQ</button>
                  <button>Term & conditions</button>
                  <button>Reporting</button>
                  <button>Documentation</button>
                  <button>Support Policy</button>
                  <button>Privacy</button>
                  </span>

                </span>
                <span className=" flex flex-col w-//4 space-y-5">
                  <span>
                    <h1 className="text-[24px] font-bold">
                    Recent Post
                    </h1>
                  </span>
                  <span className="flex space-x-3">
                    <img src="/images/footer1.png"/>
                  
                  <span>
                    <p className="text-[16px]">20 Feb 2022</p>
                    <p className="text-[18px]">Keep Your Business </p>
                   </span>
                  </span>
                  <span className="flex space-x-3">
                    <img src="/images/footer2.png"/>
                  
                  <span>
                    <p className="text-[16px]">20 Feb 2022</p>
                    <p className="text-[18px]">Keep Your Business </p>
                    </span>
                  </span>
                  <span className="flex space-x-3">
                    <img src="/images/footer3.png"/>
                  
                  <span>
                    <p className="text-[16px]">20 Feb 2022</p>
                    <p className="text-[18px]">Keep Your Business </p>
                   </span> 
                  </span>

                </span>
            </div>
            <div className="bg-footer flex py-[100] px-[300] items-center ">
                <span className='flex justify-startw-1/2'>
                  <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                </span>
                <span className='flex justify-end w-1/2 space-x-4'>
                  <FaFacebookF size={24} color="#4F4F4F" className='border border-white bg-white ' />
                  <FaInstagram size={24} color="#4F4F4F" className='border border-white bg-white '  />
                  <FaYoutube size={24} color="#FF9F0D" className='border border-white bg-white ' />
                  <FaPinterest size={24} color="#4F4F4F" className='border border-white bg-white ' />          
                </span>

            </div>


        </div>
    )
}