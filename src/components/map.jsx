export default function Map({setShowModal}) {
  return (
    <>
      <section>
        <div className="h-[43rem] bg-[rgb(238,237,221)] overflow-hidden">
          <article className="relative">
            <div className="absolute top-[4rem] left-[4rem]">
              <div className="gap-[7px] flex items-center">
                <div className="bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
                <p className="font-bold text-[0.9rem] py-[10px]">
                  Enrolling now
                </p>
              </div>
              <div className="gap-[7px] flex items-center">
                <div className="bg-[rgb(240,219,11)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
                <p className="font-bold text-[0.9rem] py-[10px]">Coming Soon</p>
              </div>
              <div className="gap-[7px] flex items-center">
                <div className="bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
                <p className="font-bold text-[0.9rem] py-[10px]">
                  Fully enrolled
                </p>
              </div>
            </div>
            <div className="object-contain absolute top-0 right-0 bg-[url('/src/assets/img/map.svg')] bg-cover  bg-no-repeat bg-[position:5rem_-5rem] h-[54rem] w-[70%] "></div>
            <ul className="absolute top-[17rem] left-[5rem] bg-white rounded-[10px] p-8 text-start">
              <p className="mb-[1.5rem] text-[2.8rem] leading-[3rem] font-medium tracking-[1px]">
                Find a study <br /> site near you
              </p>
              <div className="flex gap-[7px] mb-[1rem]">
                {" "}
                <input
                  className="border border-[#00000030] rounded-[25px] p-2 pl-[1.8rem]"
                  id="zip-code"
                  name="ZipCode"
                  type="text"
                  placeholder="Zip code"
                />{" "}
                <button className="bg-[rgb(31,41,54)] rounded-[10rem] h-[3rem] w-[7.5rem] text-white font-medium">
                  Search
                </button>
              </div>
              <div className="flex justify-between ">
                <div className="bg-[rgb(238,237,221)] rounded text-center p-[1rem] w-[10.5rem] h-[6rem] ">
                  <p className="font-semibold text-[1.6rem]">70</p>
                  veterinary clinics
                </div>
                <div className="bg-[rgb(238,237,221)] rounded text-center p-[1rem] w-[10.5rem] h-[6rem] ">
                  <p className="font-semibold text-[1.6rem]">1,000+</p>
                  participating cats
                </div>
              </div>
            </ul>
            <div className="top-[3.5rem] left-[37rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div
              className="top-[5rem] right-[25rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"
            ></div>
            <div className="top-[26rem] right-[26rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[25rem] right-[27rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[22rem] right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[23rem] right-[30rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            
            
            <div className="top-[20rem] right-[17rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[19rem] right-[18rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[19rem] right-[18rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[12rem] right-[15rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[7rem] right-[19rem]  absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[11rem] right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>

            <div className="top-[13rem] right-[32rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[14rem] right-[30rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[10rem] right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[17rem] right-[35rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[20rem] right-[20rem]  absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[13rem] right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>


            <div className="top-[13rem] right-[37rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[15rem] right-[35rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[8rem] right-[34rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[10rem] right-[39rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[20rem] right-[5rem]  absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[7rem] right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>

            <div className="top-[13rem] right-[22rem]   absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>


       
            <div className="top-[13rem] right-[4rem] absolute  bg-[rgb(240,219,11)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[23rem] right-[8rem] absolute bg-[rgb(240,219,11)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[20rem] right-[6rem] absolute bg-[rgb(240,219,11)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>

            <div className="top-[20rem] right-[15rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
         <div className="top-[18rem] right-[23rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
         <div className="top-[20rem] right-[25rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
         <div className="top-[7rem] right-[32rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
         <div className="top-[10rem] right-[10rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
         <div className="top-[17rem] right-[7rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[22rem] right-[25rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>   <div className="top-[20rem] right-[15rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
          </article>
        </div>
      </section>
    </>
  );
}
