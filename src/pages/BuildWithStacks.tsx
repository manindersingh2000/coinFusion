import Build1 from "../assets/Build4.png"
import Build2 from "../assets/Build3.png"
import Build3 from "../assets/Build2.png"
import Build4 from "../assets/Build1.png"
import Build5 from "../assets/Lock.png"
import Build6 from "../assets/Image_1.png"
import Build7 from "../assets/Image_2.png"
import Build8 from "../assets/Image_3.png"
import Button from "../components/Button"
import { Fragment } from "react/jsx-runtime"

const BuildWithStacks = () => {
  const data = [
    {
      title: "Stack web wallet",
      image: Build1,
    },
    {
      title: "DeFi platform alex",
      image: Build2,
    },
    {
      title: "Xverse app Jolocam",
      image: Build3,
    },
    {
      title: "Xversa meta wallet",
      image: Build4,
    },
  ]

  return (
    <div id="join" className="py-16 md:py-24 lg:py-32 bg-black text-white rounded-b-[3rem] md:rounded-b-[5rem] rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 lg:px-28 gap-8">
          <div className="max-w-full md:max-w-[420px]">
            <p className="text-[#5846FB]">Stacks for developer</p>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-md leading-tight md:leading-[70px]">
              Build powerful apps, secured by bitcoin
            </h2>
            <p className="my-4 md:my-6">
              Stacks connects to Bitcoin, enabiling you to build apps, smart contracts, and digital assets that are
              integerated with Bitcoin`s security, capital , and networks
            </p>
            <Button>Start Stacking</Button>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end gap-3 mt-8 md:mt-0">
            <div className="bg-[linear-gradient(to_bottom,_#5442F5,_#5442F4,_#2C18E5)] text-white w-36 h-64 md:w-48 md:h-96 rounded-full mt-4 md:mt-[6rem]">
              <div className="inset-0 z-10 py-6 md:py-10">
                <img
                  src={Build5}
                  alt=""
                  className="w-[80px] h-[100px] md:w-[120px] md:h-[150px] mx-auto"
                />
                <p className="text-center text-sm md:text-base max-w-[100px] md:max-w-[120px] mx-auto py-3 md:py-5">
                  Bitcoin secure and safe
                </p>
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="bg-[#523FFF] w-24 md:w-32 h-1 md:h-2 rounded-full"></div>
                  <div className="bg-[#523FFF] w-28 md:w-40 h-1 md:h-2 rounded-full"></div>
                  <div className="bg-[#523FFF] w-24 md:w-32 h-1 md:h-2 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="relative z-0 bg-[#313131] text-white w-64 h-[24rem] md:w-96 md:h-[35rem] rounded-full mt-4 md:mt-0">
              <p className="absolute top-3 md:top-5 right-[7rem] md:right-[10.5rem] -z-10 text-xs md:text-sm">Stages</p>
              <div className="absolute inset-0 -z-10 mx-auto top-10 md:top-14 left-16 md:left-24 w-[8rem] md:w-[12rem] h-[16rem] md:h-[22rem]">
                <img src={Build8} alt="" />
                <p className="absolute right-2 md:right-3 text-xs md:text-sm">Bitcoin</p>
              </div>
              <img
                src={Build6}
                alt=""
                className="absolute inset-0 z-10 mx-auto top-20 md:top-28 right-[2rem] md:right-[3.5rem] w-[7rem] md:w-[10rem] h-[12rem] md:h-[18rem]"
              />
              <div className="absolute inset-0 z-20 mx-auto top-24 md:top-36 right-[6rem] md:right-[9.5rem] w-[7rem] md:w-[10rem] h-[14rem] md:h-[20rem]">
                <img src={Build7} alt="" />
                <p className="absolute left-0 text-xs md:text-sm">Secured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-20 md:pt-40 px-4 md:px-16 lg:px-28">
        <p className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-12 md:mb-24 max-w-3xl">
          See what being built
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-white pt-6">
          {data.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="rounded-full bg-[#1F2123] p-3 md:p-5">
                  <div className="flex items-center justify-center w-full gap-3 md:gap-5">
                    <img
                      src={item.image}
                      alt="img"
                      className="h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
                    />
                    <p className="text-lg md:text-xl lg:text-2xl max-w-40">{item.title}</p>
                  </div>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BuildWithStacks
