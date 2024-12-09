export default function Chef () {
    return(
        <div  className="pt-[100] px-[300] space-y-10">

           <div className="flex flex-col justify-center items-center">
             <h1 className="text-text text-[32px]">Chefs</h1>
             <h1 className="font-bold text-[48px]"><span className="text-text">Me</span>et Our Chef</h1>
           </div>
           <div className="flex">
             <span className="w-1/4">
                <img src="/images/card1.png"/>
             </span>
             <span className="w-1/4">
                <img src="/images/card2.png"/>
             </span>
             <span className="w-1/4">
                <img src="/images/card3.png"/>
             </span>
             <span className="w-1/4">
                <img src="/images/card4.png"/>
             </span>
           </div>
           <div className="flex justify-center items-center">
             <button className='border-2 border-white rounded-[30px] px-[60] py-4'>See Menu</button>
           </div>

        </div>

    )
}