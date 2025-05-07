import { Fragment } from "react/jsx-runtime"
import image1 from "../assets/Vector1.png"
import image2 from "../assets/Vector2.png"
import image3 from "../assets/Vector3.png"
import image4 from "../assets/Vector4.png"
import Button from "../components/Button"

const Banner = () => {
  const bannerData = [
    {
      icon: image1,
      desc: "Alex rasises $8.6M to bring Defi to the..",
    },
    {
      icon: image2,
      desc: "Nyc get own cryptocurrancy after",
    },
    {
      icon: image3,
      desc: "Alex rasises $8.6M to bring Defi to the..",
    },
    {
      icon: image4,
      desc: "Alex rasises $8.6M to bring Defi to the..",
    },
  ]

  return (
    <div id="learn" className="bg-black rounded-b-[3rem] md:rounded-b-[5rem]">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Main hero section */}
          <div className="flex flex-col items-center text-center text-white my-24 md:my-32 lg:my-44 pt-16 md:pt-0">
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl max-w-[56rem] leading-tight">
              Unleash Bitcoin full potential
            </h1>

            <div className="my-4 md:my-8 max-w-xs md:max-w-sm lg:max-w-md">
              <p className="text-lg md:text-xl lg:text-2xl">
                Stacks enables DeFi, NFTs, apps, and smart contracts for bitcoin
              </p>
            </div>
            <Button>See whats built on stock</Button>
          </div>

          {/* Latest Ecosystem News section */}
        </div>
        <div className="pb-10 md:pb-20">
          <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">Latest Ecosystem news</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-white overflow-x-auto">
            {bannerData.map((item, index) => (
              <Fragment key={index}>
                <div className="rounded-full bg-[#1F2123] p-3 md:p-5">
                  <div className="flex items-center justify-center w-full md:w-auto gap-3 md:gap-5">
                    <img
                      src={item.icon}
                      alt="img"
                      className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
                    />
                    <p className="text-sm md:text-base lg:text-xl max-w-[14rem]">{item.desc}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
