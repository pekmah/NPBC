import { Button } from '@/components/general'
import React from 'react'

const Intakes = () => {
    return (
        <section className='flex bg-[#fff]'>
            <div className="flex-1 h-[550px]">
                <img className='h-full object-cover' src="/images/admission/intakes-1.jpg" alt="intakes-1" />
            </div>

            <div className="flex-1 text-black flex bg-white py-16">
                <div className="w-[80%] mx-auto text-c-blue ">
                    <h3 className='c-h7 font-semibold mb-4'>Our Intakes</h3>

                    <span className="text-sm">
                        The February intake is now open
                    </span>
                    <br />

                    <p className="text-sm mt-3">
                        We conduct intakes twice an year in the months of February and September for all our courses
                    </p>

                    <div className="my-8">
                        <h5 className="c-medium font-bold">Intake closes in</h5>

                        <div className="flex gap-5 text-center">
                            <div className="flex flex-col gap-1 my-3">
                                <span className="text-sm text-c-blue">Days</span>
                                <h3 className="c-h6 text-c-red">10</h3>
                            </div>

                            <div className="flex flex-col gap-1 my-3">
                                <span className="text-sm text-c-blue">Hours</span>
                                <h3 className="c-h6 text-c-red">12</h3>
                            </div>

                            <div className="flex flex-col gap-1 my-3">
                                <span className="text-sm text-c-blue">Minutes</span>
                                <h3 className="c-h6 text-c-red">50</h3>
                            </div>

                            <div className="flex flex-col gap-1 my-3">
                                <span className="text-sm text-c-blue">Seconds</span>
                                <h3 className="c-h6 text-c-red">22</h3>
                            </div>
                        </div>
                    </div>

                    <p className='text-sm'>
                        Our application process is clear and simple so you can apply from anywhere.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Button className={"bg-c-red text-white font-semibold text-xs w-32"}>
                            Apply Now
                        </Button>

                        <Button className={"bg-none h-8 text-xs text-[#909090] flex items-center gap-2 font-semibold px-5  justify-center"}>
                            View Courses first
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intakes