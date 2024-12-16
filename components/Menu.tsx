

export default function Menu () {
    return(
        <div className="pt-[100] px-[300] space-y-8">

             <div className="flex flex-col justify-center items-center">
                <h1 className="text-[32px] text-text">Choose & pick</h1>
                <h1 className="font-bold text-[48px]"><span className="text-text">Fr</span>om Our Menu</h1>
             </div>
             <div className="font-bold text-[20px] space-x-28">
               <button><span className="text-text">Breakfast</span></button>
               <button>Lunch</button>
               <button>Dinner</button>
               <button>Dessert</button>
               <button>Drink</button>
               <button>Snack</button>
               <button>Suops</button>
             </div>
             <div className="flex">
                <div className=" relative w-1/3">
                    <img src="/images/image7.png" className="bg-leave "/>   
                </div>
                <div className="w-1/3 space-y-4"> 
                    <span className="flex space-x-4">
                        <span>
                         <img src="/images/pic1.png" className="w-[80] h-[79]"/>
                        </span>
                        <span className="flex-col">
                         <h1 className="font-bold text-[20px]">Lettuce Leaf</h1>
                         <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
                         <p className="font-bold text-text text-[18px]">12.5$</p>
                        </span>
                    </span>
                    <span className="flex space-x-4">
                        <span>
                         <img src="/images/pic2.png" className="w-[80] h-[79]"/>
                        </span>
                        <span className="flex-col">
                         <h1 className="font-bold text-[20px]">Fresh Breakfast</h1>
                         <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
                         <p className="font-bold text-text text-[18px]">14.5$</p>
                        </span>
                    </span>
                    <span className="flex space-x-4">
                        <span>
                         <img src="/images/pic3.png" className="w-[80] h-[79]"/>
                        </span>
                        <span className="flex-col">
                         <h1 className="font-bold text-[20px]">Mild Butter</h1>
                         <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
                         <p className="font-bold text-text text-[18px]">12.5$</p>
                        </span>
                    </span>
                    <span className="flex space-x-4">
                        <span>
                         <img src="/images/pic4.png" className="w-[80] h-[79]"/>
                        </span>
                        <span className="flex-col">
                         <h1 className="font-bold text-[20px]">Fresh Bread</h1>
                         <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
                         <p className="font-bold text-text text-[18px]">12.5$</p>
                        </span>
                    </span>
                </div>
                <div className="w-1/3 space-y-4"> 
                    <span className="flex space-x-4">
                        <span>
                         <img src="/images/pic5.png" className="w-[80] h-[79]"/>
                        </span>
                        <span className="flex-col">
                         <h1 className="font-bold text-[20px]">Glow Cheese</h1>
                         <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
                         <p className="font-bold text-text text-[18px]">12.5$</p>
                        </span>
                    </span>
                    <span className="flex space-x-4">
                        <span>
                         <img src="/images/pic6.png" className="w-[80] h-[79]"/>
                        </span>
                        <span className="flex-col">
                         <h1 className="font-bold text-[20px]">Italian Pizza</h1>
                         <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
                         <p className="font-bold text-text text-[18px]">14.5$</p>
                        </span>
                    </span>
                    <span className="flex space-x-4">
                        <span>
                         <img src="/images/pic7.png" className="w-[80] h-[79]"/>
                        </span>
                        <span className="flex-col">
                         <h1 className="font-bold text-[20px]">Sllice Beef</h1>
                         <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
                         <p className="font-bold text-text text-[18px]">12.5$</p>
                        </span>
                    </span>
                    <span className="flex space-x-4">
                        <span>
                         <img src="/images/pic8.png" className="w-[80] h-[79]"/>
                        </span>
                        <span className="flex-col">
                         <h1 className="font-bold text-[20px]">Mushaom Pizza</h1>
                         <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
                         <p className="font-bold text-text text-[18px]">12.5$</p>
                        </span>
                    </span>
                </div>
             </div>

        </div>
    )
}
