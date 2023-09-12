import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex  flex-col justify-center min-h-screen gap-7 max-container xl:flex-row"
    >
      {/* left side of the hero section */}
      <div className="relative xl:2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-[#8aa4ed]">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-[#B8C5F9] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        {/* stats on the left side of the hero section */}
        <div className="flex justify-start items-start flex-wrapxs mt-20 gap-16 max-sm:gap-6">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* right side of the hero section  */}
      {/* BigShoeImg */}
      <div className="relative flex justify-center items-center w-full xl:h-screen max-xl:py-10 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={500}
          height={500}
          className="object-contain relative z-10"
        />

        {/*Shoes*/}
        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.id}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
