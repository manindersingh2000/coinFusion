import BitCoin from "../assets/BitCoin.png"
import StackImg from "../assets/StackImg.png"
import Button from "../components/Button"

const StackingIntro = () => {
  return (
    <div className="py-20 md:py-32 lg:py-56">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 lg:px-28">
          <div className="max-w-full md:max-w-[420px]">
            <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-sm leading-tight md:leading-[70px]">
              Stacking, a new way to earn bitcoin
            </h2>
            <p className="my-4 md:my-6">
              Hold and temporarily lock STX, stacks native currency, and support the networks security and consensus. As
              a rewards, you`ll earn BTC.
            </p>
            <Button>Start Stacking</Button>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex flex-col sm:flex-row gap-3 mb-4 items-center">
              <p className="bg-gray-200 py-4 sm:py-8 px-8 sm:px-16 rounded-full text-xl sm:text-3xl w-full sm:w-auto text-center">
                9.5%
              </p>
              <img src={BitCoin || "/placeholder.svg"} alt="" className="w-16 h-16 md:w-24 md:h-24" />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between bg-[#5546FF] text-white py-4 sm:py-8 px-8 sm:px-16 rounded-full">
              <p className="text-xl sm:text-3xl mb-2 sm:mb-0">$864,896,126</p>
              <p className="text-sm sm:text-base">Total value locked</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-end gap-5 my-3">
              <img src={StackImg || "/placeholder.svg"} alt="" className="w-24 md:w-auto" />
              <p className="bg-gray-200 rounded-full text-base sm:text-xl py-4 sm:py-8 px-8 sm:px-16 font-bold text-center">
                Data courtesy of <br />
                stacking club
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackingIntro
