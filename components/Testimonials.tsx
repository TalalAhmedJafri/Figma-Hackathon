import { FaStar } from 'react-icons/fa';
import { FaDotCircle } from 'react-icons/fa';

export default function Testimonials () {
    return(
        <div className="pt-[100] px-[300]">

          <div>
            <h1 className="text-text text-[32px]">Testimonials</h1>
            <h1 className="font-bold text-[48px]">What our client are saying</h1>
          </div>
          <div>
            <span className='flex justify-center items-end'>
                <img src="/images/pic.png" />
            </span>
            <span className='flex flex-col justify-center items-center space-y-10 border py-10 border-white bg-white text-black'>
                <span>
                    <img src='/images/Quotes.png'/>
                </span>
                <span>
                 <p className='flex align-middle px-80 text-center '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                  Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                  Ultrices mattis sed vitae mus risus. Lacus nisi, 
                  et ac dapibus sit eu velit in consequat.
                 </p>
                </span>
                <span className='flex space-x-3'>
                    <FaStar size={24} color='#FF9F0D' />
                    <FaStar size={24} color='#FF9F0D' />
                    <FaStar size={24} color='#FF9F0D' />
                    <FaStar size={24} color='#FF9F0D' />
                    <FaStar size={24} color='#E0E0E0' />
                </span>
                <span className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-[24px]'>Alamin Hasan</h1>
                    <p className='test-[16px]'>Food Specialist</p>
                </span>
            </span>
            <span className='flex justify-center items-center pt-20'>
              <FaDotCircle size={15} color="#FF9F0D" />
              <FaDotCircle size={15} color="#FF9F0D4D" />
              <FaDotCircle size={15} color="#FF9F0D4D" />
              <FaDotCircle size={15} color="#FF9F0D4D" />
            </span>

         </div>

        </div>

    )
}