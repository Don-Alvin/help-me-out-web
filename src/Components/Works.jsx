const Works = () => {
  return (
    <section id="works" className="p-6 md:p-6 lg:p-[100px] bg-white flex flex-col items-center gap-[32px] lg:gap-[59px]">
        <h1 className="text-text-header font-sora text-[40px]">How it works</h1>
        <article className="flex flex-col items-start md:flex-row lg:gap-[83px]">
            <div className="sm:w-[90%] items-center flex flex-col gap-7" >
                <div className="flex flex-col items-center gap-4 md:gap-8 w-full md:w-[358px]">
                    <div className="flex items-center justify-center text-[24px] md:text-[32px] font-bold font-sora rounded-full  text-white bg-primary-main w-[67px] h-[67px]">1</div>
                    <h3 className="font-work font-semibold text-[22px] md:text-[28px] text-primary-500">Record Screen</h3>
                    <p className="text-center text-text-grey font-work md:text-[20px]">
                        Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.
                    </p>
                </div>
                <img src="images/works.svg" alt="works illustration" />
            </div>
            <div className="sm:w-[90%] items-center flex flex-col gap-7">
                <div className="flex flex-col items-center gap-4 md:gap-8 w-full md:w-[358px]">
                    <div className="flex items-center justify-center text-[24px] md:text-[32px] font-bold font-sora rounded-full  text-white bg-primary-main w-[67px] h-[67px]">2</div>
                    <h3 className="font-work font-semibold text-[22px] md:text-[28px] text-primary-500">Share Your Recording</h3>
                    <p className="text-center text-text-grey font-work md:text-[20px]">
                        We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.
                    </p>
                </div>
                <img src="images/works.svg" alt="works illustration" />
            </div>
            <div className="flex sm:w-[90%] items-center flex-col gap-7">
                <div className="flex flex-col items-center gap-4 md:gap-8 w-full md:w-[358px]">
                    <div className="flex items-center justify-center text-[24px] md:text-[32px] font-bold font-sora rounded-full  text-white bg-primary-main w-[67px] h-[67px]">3</div>
                    <h3 className="font-work font-semibold text-[22px] md:text-[28px] text-primary-500">Learn Effortlessly</h3>
                    <p className="text-center text-text-grey font-work md:text-[20px]">
                        Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
                    </p>
                </div>
                <img className="w-full" src="images/works.svg" alt="works illustration" />
            </div>
        </article>
    </section>
  )
}

export default Works