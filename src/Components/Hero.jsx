import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="p-6 md:p-[100px] lg:flex items-center bg-white">
        <article className='flex flex-col gap-[48px]'>
            <div className='flex flex-col gap-[20px]'>
              <h1 className='text-[56px] lg:text-[64px] font-bold text-text-header font-sora'>Show Them <br /> Don't Just Tell</h1>
              <p className='text-text-grey font-work'>
                  Help your friends and loved ones by creating and sending videos on how to get things done on a website.
              </p>
            </div>
            <button className="font-work w-[95%] md:w-[239px] px-[24px] py-[22px] flex items-center gap-[12px] justify-center bg-primary-main rounded-lg text-white">
              Install HelpMeOut
              <BsArrowRight />
            </button>
        </article>
        <article className='hidden lg:block'>
            <img src="images/hero.svg" alt="hero image" />
        </article>
    </section>
  )
}

export default Hero