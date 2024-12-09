export default function FoodCategory () {
    return(
        <div className="pt-[100] px-[300]">

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-text  text-[32px]">
                  Food Category
                </h1>
                <h1 className="font-bold text-[48px]">
                  <span className="text-text">Ch</span>oose Food Iteam
                </h1>
            </div>
            <div className="flex space-x-10">
                <span className="w-1/4">
                    <img src="/images/food1.png"/>
                </span>
                <span className="w-1/4">
                    <img src="/images/food2.png"/>
                </span>
                <span className="w-1/4">
                    <img src="/images/food3.png"/>
                </span>
                <span className="w-1/4">
                    <img src="/images/food4.png"/>
                </span>
            </div>

        </div>
    )
}