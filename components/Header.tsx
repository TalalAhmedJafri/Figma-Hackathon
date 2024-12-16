import Link from "next/link";
export default function Header () {
    return (
        <div className="flex md:py-[15] md:px-[150] bg-black ">

            <div className="flex justify-start items-center w-1/3 ">
              <h1 className="font-bold text-[24px] font-h"> 
                 <Link href="/">
                    <span className="text-text">
                       Food
                    </span>
                   <span className="text-white">
                      tuck
                   </span>
                 </Link>
               </h1>
            </div>
            <div className="flex items-center w-1/3 text-white">
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
                           <Link href="/About">About</Link>
                        </li>
                        <li>
                           <Link href="/ShopList">Shop</Link>
                        </li>
                        <li>
                           <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex space-x-4 w-1/3 justify-end items-center">
                <a><img src="/images/icon1.png"/></a>
                <a><img src="/images/User.png"/></a>
                <a><img src="/images/icon2.png"/></a>
            </div>

        </div>
    )
}
