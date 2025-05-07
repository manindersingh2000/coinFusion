import { Fragment } from "react/jsx-runtime"
import Unleash from "../components/data/stackingData"

const StackUnleashed = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold max-w-2xl">
            Stacks Unleashed Bitcoin
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-16 lg:px-28 gap-6 md:gap-8 my-8 md:my-11">
          {Unleash.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="w-full p-4 md:p-6 bg-[#F0F0F0] rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#5546FF] rounded-full mb-4">
                    <img
                      src={item.icon || "/placeholder.svg"}
                      alt="img"
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                  </div>
                  <div className="mt-16 sm:mt-24 md:mt-[15rem]">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-[300px] font-normal text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 my-2 md:my-4 max-w-[220px]">{item.desc}</p>
                    <button className="text-[#5546FF] text-xs">Learn more</button>
                  </div>
                </div>
              </Fragment>
            )
          })}
        </div>
        <p className="text-center font-semibold underline">See all features</p>
      </div>
    </div>
  )
}

export default StackUnleashed
