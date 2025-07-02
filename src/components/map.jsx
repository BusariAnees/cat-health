export default function Map({ setShowModal }) {
  return (
    <>
      <section>
        <div className="h-[52rem] sm:h-[43rem] bg-[rgb(238,237,221)] overflow-hidden">
          <article className="relative">
            <div className="absolute top-[18rem] left-[1.5rem] sm:top-[4rem] sm:left-[4rem]">
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
            <div className="w-[100%]  h-[25rem] bg-[position:-0.7rem_-2rem]   object-contain absolute top-0 right-0 bg-[url('/src/assets/img/map.svg')] bg-cover  bg-no-repeat sm:bg-[position:5rem_-5rem] sm:h-[54rem] sm:w-[70%] "></div>
            <ul className="top-[26rem] left-[0rem] relative w-[90%] sm:w-[26rem] m-auto h-[23rem]   sm:absolute sm:top-[17rem] sm:left-[5rem] bg-white rounded-[10px] p-8 text-start">
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
                <div className="w-[10rem] p-[10px] bg-[rgb(238,237,221)] rounded text-center sm:p-[1rem] sm:w-[10.5rem] h-[6rem] ">
                  <p className="font-semibold text-[1.6rem]">70</p>
                  veterinary clinics
                </div>
                <div className="w-[10rem] p-[10px]   bg-[rgb(238,237,221)] rounded text-center sm:p-[1rem] sm:w-[10.5rem] h-[6rem] ">
                  <p className="font-semibold text-[1.6rem]">1,000+</p>
                  participating cats
                </div>
              </div>
            </ul>
            <div className="top-[3.5rem] left-[10rem] sm:left-[37rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[5rem] right-[13rem] sm:right-[25rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="g-4 top-[6rem]  sm:top-[26rem] right-[15rem] sm:right-[26rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="g-3 top-[12rem] sm:top-[25rem] right-[20rem] sm:right-[27rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[12rem]  sm:top-[22rem] right-[7rem] sm:right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="g-2 top-[5rem] right-[23rem] sm:top-[23rem] sm:right-[30rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[10rem] right-[8rem] sm:top-[20rem] sm:right-[17rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[9rem] right-[9rem] sm:top-[19rem] sm:right-[18rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[9rem] right-[9rem] sm:top-[19rem] sm:right-[18rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[6rem] right-[7rem] sm:top-[12rem] sm:right-[15rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[3rem] right-[20rem] sm:top-[7rem] sm:right-[19rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[5rem] right-[14rem] sm:top-[11rem] sm:right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[6rem] right-[16rem] sm:top-[13rem] sm:right-[32rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[7rem] right-[15rem] sm:top-[14rem] sm:right-[30rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[5rem] right-[14rem] sm:top-[10rem] sm:right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="g-1 top-[8rem] right-[17rem] sm:top-[17rem] sm:right-[35rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[10rem] right-[10rem] sm:top-[20rem] sm:right-[20rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[6rem] right-[14rem] sm:top-[13rem] sm:right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[6rem] right-[18rem] sm:top-[13rem] sm:right-[37rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[7rem] right-[17rem] sm:top-[15rem] sm:right-[35rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[4rem] right-[17rem] sm:top-[8rem] sm:right-[32rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[5rem] right-[19rem] sm:top-[10rem] sm:right-[39rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[14rem] right-[14rem] sm:top-[20rem] sm:right-[5rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[3rem] right-[14rem] sm:top-[7rem] sm:right-[28rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[6rem] right-[11rem] sm:top-[13rem] sm:right-[22rem] absolute bg-[rgb(178,214,165)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[6rem] right-[5rem] sm:top-[13rem] sm:right-[4rem] absolute bg-[rgb(240,219,11)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[11rem] right-[22rem] sm:top-[23rem] sm:right-[8rem] absolute bg-[rgb(240,219,11)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[10rem] right-[15rem] sm:top-[20rem] sm:right-[6rem] absolute bg-[rgb(240,219,11)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[10rem] right-[7rem] sm:top-[20rem] sm:right-[15rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[9rem] right-[11rem] sm:top-[18rem] sm:right-[23rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[10rem] right-[12rem] sm:top-[20rem] sm:right-[25rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[12rem] right-[16rem] sm:top-[7rem] sm:right-[32rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[5rem] right-[5rem] sm:top-[10rem] sm:right-[10rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[8rem] right-[23rem] sm:top-[17rem] sm:right-[7rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[11rem] right-[12rem] sm:top-[22rem] sm:right-[25rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
            <div className="top-[10rem] right-[7rem] sm:top-[20rem] sm:right-[15rem] absolute bg-[rgb(240,117,117)] h-[15px] w-[15px] border-[2px] border-black rounded-[10px]"></div>
          </article>
        </div>
      </section>
    </>
  );
}
