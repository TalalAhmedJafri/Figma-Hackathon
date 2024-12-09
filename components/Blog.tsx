export default function Blog () {
    return(
        <div className="pt-[100] px-[300]">

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[32px] text-text">
                  Blog Post
                </h1>
                <h1 className="font-bold text-[48px]">
                 <span className="text-text">La</span>test News & Blog
                </h1>
            </div>
            <div className="flex space-x-5">
                <span className="w-1/3 border border-white space-y-4">
                    <img src="/images/blog1.png"/>
                    <h1 className="text-text text-[16px] p-5">10 February 2022 </h1>
                    <p className="font-bold text-[24px] p-5">
                       Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                    </p>
                    <span className="flex p-5">
                        <span className="flex w-1/2 justify-start items-center ">
                         <p className="text-[16px]">Learn More</p>
                        </span>
                        <span className="flex w-1/2 justify-end items-center space-x-3">
                            <img src="/images/like.png"/>
                            <img src="/images/chat.png"/>
                            <img src="/images/share.png"/>
                        </span>

                    </span>
                </span>
                <span className="w-1/3 border border-white space-y-4">
                    <img src="/images/blog2.png"/>
                    <h1 className="text-text text-[16px] p-5">10 February 2022 </h1>
                    <p className="font-bold text-[24px] p-5">
                    Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                    </p>
                    <span className="flex p-5">
                        <span className="flex w-1/2 justify-start items-center ">
                         <p className="text-[16px]">Learn More</p>
                        </span>
                        <span className="flex w-1/2 justify-end items-center space-x-3">
                            <img src="/images/like.png"/>
                            <img src="/images/chat.png"/>
                            <img src="/images/share.png"/>
                        </span>

                    </span>
                </span>
                <span className="w-1/3 border border-white space-y-4">
                    <img src="/images/blog3.png"/>
                    <h1 className="text-text text-[16px] p-5">10 February 2022 </h1>
                    <p className="font-bold text-[24px] p-5">
                       Curabitur rutrum velit ac congue malesuada
                    </p>
                    <span className="flex p-5">
                        <span className="flex w-1/2 justify-start items-center ">
                         <p className="text-[16px]">Learn More</p>
                        </span>
                        <span className="flex w-1/2 justify-end items-center space-x-3">
                            <img src="/images/like.png"/>
                            <img src="/images/chat.png"/>
                            <img src="/images/share.png"/>
                        </span>

                    </span>
                </span>
            </div>


        </div>
    )
}