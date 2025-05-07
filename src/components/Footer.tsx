type ExploreItem = {
  title: string;
}

const Footer = () => {
  const explore: ExploreItem[] = [
    { title: "Wallets" },
    { title: "Docs" },
    { title: "Get GXT" },
    { title: "Apps" },
    { title: "Learning resources" },
    { title: "Eco System" },
    { title: "Events" },
    { title: "Blogs" },
    { title: "Resources" },
    { title: "Video Learning" },
    { title: "Etherum Learning" },
    { title: "Smart Contract" },
    { title: "NFTs" },
  ]

  return (
    <div className="bg-black text-white rounded-tl-[3rem] rounded-tr-[3rem] md:rounded-tl-[5rem] md:rounded-tr-[5rem]">
      <div className="container">
        <div className="pt-16 md:pt-28 py-8 md:py-10">
          <h5 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Explore Stacks</h5>
          <div className="py-6 md:py-10 flex gap-2 flex-wrap">
            {explore.map((item, index) => (
              <span
                key={index}
                className="rounded-full text-center border px-4 sm:px-8 md:px-12 lg:px-20 py-2 md:py-3 m-1 text-xs sm:text-sm"
              >
                {item.title}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 md:pt-36">
            <p className="text-[#5846FB] text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-0">coinFusion</p>
            <div>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 list-none text-xs sm:text-sm">
                <li>Terms & Conditions |</li>
                <li>Sitemap |</li>
                <li>Privacy Policy |</li>
                <li>Cookies Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
