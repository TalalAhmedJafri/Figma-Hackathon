import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu" ; 
  import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
  


export default function Header () {
    return (
        <div className="pt-[45] px-[150] bg-opacity-50 bg-header-bg">

          <div className="flex justify-center items-center ">
            <h1 className="font-bold text-[24px] font-h"> 
                <span className="text-text">
                    Food
                </span>
                <span className="text-white">
                    tuck
                </span>
            </h1>
          </div>
          <div className="flex">
            <div className="w-1/2"> 
                <nav>
                    <ul className="flex justify-center items-center space-x-6 text-[16px] ">
                        <li>
                           <Link href="/">Home</Link>
                        </li>
                        <li>
                           <Link href="/">Menu</Link>
                        </li>
                        <li>
                           <Link href="/">Blog</Link>
                        </li>
                        <li>
                           <Link href="/">Pages</Link>
                        </li>
                        <li>
                          <NavigationMenu>
                             <NavigationMenuList>
                                 <NavigationMenuItem>
                                      <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                      <NavigationMenuContent>
                                         <NavigationMenuLink>Link</NavigationMenuLink>
                                      </NavigationMenuContent>
                                 </NavigationMenuItem>
                             </NavigationMenuList>
                          </NavigationMenu>

                        </li>
                        <li>
                           <Link href="/">Shop</Link>
                        </li>
                        <li>
                           <Link href="/">Contact</Link>
                        </li>

                    </ul>
                </nav>
            </div>
            <div className="flex justify-center items-center space-x-3  w-1/2">
              <div className="flex space-x-32 px-5 py-2 border rounded-3xl border-text">
                   <div>
                     <h1>Search...</h1>
                  </div>
                  <div>
                     <img src="/images/icon1.png" alt="icon" className="h-[24] w-[24]"/>
                  </div>
              </div> 
              <div>
                <img src="/images/icon2.png"/>
              </div>
            </div>
          </div>
          <div className="flex px-[150] py-[45]">
            <div className="flex justify-center items-center w-1/2">
               <div className='space-y-20'>
                <div>
                   <img src="/images/line.png"/>
                </div>
                <div>
                  
                      <a href="https://www.facebook.com/" className='p-4'>
                      <FaFacebook size={11} color="#ffffff" />
                      </a>
                
                      <a href="https://www.twitter.com/" className='p-4'>
                      <FaTwitter size={11} color="#FF9F0D" />
                      </a>

                      <a href="https://www.pinterest.com/" className='p-4'>
                      <FaPinterest size={11} color="#ffffff" />
                      </a>
  
                   
                </div> 
                <div>
                   <img src="/images/line.png"/>
                </div>     
                       
               </div>
               <div>
                  <h1 className='text-[32px] text-text'>
                     Its Quick & Amusing!
                  </h1>
                  <h1 className='text-[60px] font-bold pr-32'>
                  <span className='text-text'>Th</span>e Art of speed food Quality
                  </h1>
                  <p className='text-[16px] pr-[200px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue
                  </p>
                  <button className='rounded-[30px] bg-text px-[60] py-4'>See Menu</button>


               </div>

            </div>
            <div className='w-1/2'>
                <img src='/images/Image.png' />
            </div>
        </div>

        </div>
    );
}