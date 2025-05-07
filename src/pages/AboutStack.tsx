import Button from "../components/Button"
import BitCoin_Circle from "../assets/Bitcoin_Circle.png"
import Rectangle from "../assets/Rectangle.png"
import Jolocam from "../assets/Jolocam.png"

const AboutStack = () => {
  return (
    <div className="py-20 md:py-40 lg:py-96">
      <div className="container bg-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
          <div className="px-4 md:px-0">
            <h4 className="text-2xl sm:text-3xl md:text-[40px] text-bold max-w-4xl leading-tight md:leading-[50px]">
              Stacks mission to create a better, user-owned decenterlized internet .To do it we`re unleashing Bitcoin,
              the most battle - tested and valueable blockchain in the world
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-7 mt-6">
              <Button>Learn about series</Button>
              <button className="underline text-black mt-4 sm:mt-0">Why stack in built</button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col-2 gap-5 px-5 items-center md:items-end mt-8 md:mt-0">
            <div className="bg-black w-40 h-64 md:w-60 md:h-96 rounded-full flex items-center justify-center">
              <img
                src={BitCoin_Circle || "/placeholder.svg"}
                alt=""
                className="w-[4rem] h-[12rem] md:w-[6rem] md:h-[17rem] object-contain"
              />
            </div>
            <div className="bg-[#2C18E5] w-48 h-[20rem] md:w-80 md:h-[30rem] rounded-full flex flex-col py-3 md:py-5 gap-6 md:gap-10 items-center">
              <img src={Jolocam || "/placeholder.svg"} alt="" className="w-[10rem] md:w-[16rem] py-2 md:py-3" />
              <img src={Rectangle || "/placeholder.svg"} alt="" className="w-[3rem] md:w-[5rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutStack
