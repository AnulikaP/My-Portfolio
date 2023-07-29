import React, { useState } from 'react'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {BsDot} from 'react-icons/bs';

const Slides = () => {

    const slideImages = [
        {url: 'https://www.akkodis.com/-/media/project/akkodis/akkodis/images/campaign-images/front-end-web-developer.png?h=630&iar=0&w=1200&hash=F67CB3E101DC6B260B8E395FE0481F34'},

        {url: 'https://www.turing.com/blog/wp-content/uploads/2022/05/Women-in-tech.jpg'},
        {url: 'https://arkenea.com/wp-content/uploads/2021/01/desk-601540_640.jpg'},
        {url: 'https://assets.bizclikmedia.net/320/32e588a724533d7f742e76a82f43e8df:43625a76e53deb9695851e147f24979a/gettyimages-1398994132.jpg'},

        {url: 'https://img.freepik.com/premium-vector/woman-sitting-computer-working-minimalist-vector-illustration_938931-7.jpg'},

        {url: 'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80'}

    ]

    const [slideShow, setSlideShow] = useState(1);

    const prevSlide = () => {
        const isInitialSlide = slideShow === 0;
        const newIndex = isInitialSlide ? slideImages.length - 1 : slideShow - 1;
        setSlideShow(newIndex);
    };
    const nextSlide = () => {
        const isFinalSlide = slideShow === slideImages.length - 1;
        const newIndex = isFinalSlide ? 0 : slideShow + 1;
        setSlideShow(newIndex)
    };
    const goToSlide = (slideIndex) => {
        setSlideShow(slideIndex)
    }

   

  return (
    <div className='max-w-[500px] w-full h-[300px] m-auto relative group'>
        <div style={{ backgroundImage: `url(${slideImages[slideShow].url})`}} className='w-full h-full rounded-2xl bg-center dg-cover duration-500 color-white' >
        </div >
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 cursor-pointer color-white'>
         <IoIosArrowBack onClick={prevSlide} size={30}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-30%] right-5 text-2xl rounded-full p-2 cursor-pointer'>
         <IoIosArrowForward onClick={nextSlide} size={30}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slideImages.map((slide, slideIndex) => (
                <div key={slideIndex}
                onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                  <BsDot/>
                </div>  

            ))}
           
        </div>
      </div>
  )
}

export default Slides