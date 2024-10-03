import Link from "next/link";



export const metadata = {
  title: "Get me a chai",
  description: "A Fund project",
};

export default function Home() {
  return (<>
 
    <div className="container md:pb-5 md:h-[50vh] h-[40vh] gap-5 mx-auto text-white flex flex-col text-center justify-center">
      <div className="flex justify-center gap-4">
        <span className="font-bold text-3xl">Get Me a Chai</span>
        <span><img className="md:w-[4vw] w-[12vw] mt-2 md:mt-0" src="/coffeecup-removebg.png" alt="chai" /></span>
      </div>
      <span>A crowdfunding platform for creators to fund their projects</span>
      <span>A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funding</span>
      <div>
        <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here
          </button>
        </Link>
        <Link href={"/about"}>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More
          </button>
        </Link>
      </div>
    </div>
    <div className="bg-white h-1 opacity-25"></div>
    <div className="container flex flex-col justify-center pb-5 mt-3 md:mt-0 md:h-[50vh] gap-5 mx-auto text-white ">
      <div className="flex justify-center font-bold text-2xl items-center pb-5">
        <h2>Your Fans can buy you a Chai</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <img className="bg-slate-500 w-20 h-20 rounded-full" src="/worker-removebg-preview.png" alt="chai" />
          <span className="font-bold text-[15px]">Fans want to help</span>
          <span className="text-[15px]">Your fans are available to support you</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="bg-slate-500 w-20 h-20 rounded-full" src="/goldcoin.gif" alt="chai" />
          <span className="font-bold text-[15px]">Fans want to contribute</span>
          <span className="text-[15px]">Your fans are willing to contribute financially</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="bg-slate-500 w-20 h-20 overflow-hidden inline-block rounded-full"><img className="object-cover w-full h-full" src="group.jpg" alt="chai" /></span>
          <span className="font-bold text-[15px]">Fans want to collaborate</span>
          <span className="text-[15px]">Your fans are ready to collaborate with you</span>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-25"></div>
    <div className="container flex flex-col justify-center pb-10 pt-10 gap-5 mx-auto text-white ">
      <div className="flex justify-center font-bold text-2xl items-center pb-5">
        <h2>Learn more about us</h2>
      </div>
      <div className="flex justify-evenly">
        <iframe className="md:w-[50vw] md:h-[60vh]" src="https://www.youtube.com/embed/QtaorVNAwbI?si=Db-_wBXfguWN_u4b" title="YouTube video player" style={{ border: "0" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  </>
  );
}
