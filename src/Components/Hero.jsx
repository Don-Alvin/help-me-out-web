import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="lg:p-[100px] lg:flex items-center ">
        <article className='flex flex-col gap-[48px]'>
            <div className='flex flex-col gap-[20px]'>
              <h1 className='lg:text-[64px] font-bold text-text-header'>Show Them <br /> Don't Just Tell</h1>
              <p className='text-text-grey'>
                  Help your friends and loved ones by creating and sending videos on how to get things done on a website.
              </p>
            </div>
            <button className=" w-[239px] lg:px-[24px] lg:py-[22px] flex items-center gap-[12px] justify-center bg-primary-main rounded-lg text-white">
              Install HelpMeOut
              <BsArrowRight />
            </button>
        </article>
        <article>
            <img src="images/hero.svg" alt="hero image" />
        </article>
    </section>
  )
}

export default Hero