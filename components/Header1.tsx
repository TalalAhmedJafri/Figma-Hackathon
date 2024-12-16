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
import Menu from "./Menu";
  


export default function Header1 () {
    return (
        <div className="md:pt-[45] md:px-[150] bg-[url('/images/frame0.png')] bg-opacity-50 ">
         <div className="max-md:flex">
          <div className="md:flex justify-center items-center max-md:w-1/2 max-md:pl-5 ">
            <h1 className="font-bold text-[24px] font-h"> 
               <a href="/">
                <span className="text-text">
                    Food
                </span>
                <span className="text-white">
                    tuck
                </span>
                </a>
            </h1>
          </div>
          <div className="hidden max-md:block max-md:w-1/2 max-md:pl-80 ">
               <button><img src="/images/Menu.png" className=" invert"/></button>
            </div>
          </div>
          <div className="hidden md:block">
          <div className="flex">
            <div className="w-1/2"> 
                <nav>
                    <ul className="flex justify-center items-center space-x-6 text-[16px] ">
                        <li>
                           <Link href="/">Home</Link>
                        </li>
                        <li>
                           <Link href="/Menu">Menu</Link>
                        </li>
                        <li>
                           <Link href="/Blog1">Blog</Link>
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
                                         <NavigationMenuLink><Link href="/About"/></NavigationMenuLink>
                                      </NavigationMenuContent>
                                 </NavigationMenuItem>
                             </NavigationMenuList>
                          </NavigationMenu>

                        </li>
                        <li>
                           <Link href="/ShopList">Shop</Link>
                        </li>
                        <li>
                           <Link href="/Footer">Contact</Link>
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
          </div>
          <div className="md:flex md:px-[150] md:py-[45] max-md:px-[50]">
            <div className="flex justify-center items-center max-md:flex-col md:w-1/2">
               <div className='space-y-20 hidden md:block'>
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
               <div className="max-md:pt-20 max-md:space-y-6">
                  <h1 className='text-[32px]  text-text'>
                     Its Quick & Amusing!
                  </h1>
                  <h1 className='text-[60px]  font-bold pr-32'>
                  <span className='text-text'>Th</span>e Art of speed food Quality
                  </h1>
                  <p className='text-[16px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue
                  </p>
                  <button className='rounded-[30px] bg-text px-[60] py-4'>See Menu</button>


               </div>

            </div>
            <div className='md:w-1/2'>
                <img src='/images/Image.png' />
            </div>
        </div>

        </div>
    );
}