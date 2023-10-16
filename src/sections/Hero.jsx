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
      className="flex flex-col justify-center w-full min-h-screen gap-7 max-container xl:flex-row"
    >
      {/* left side of the hero section */}
      <div className="relative flex flex-col items-start justify-center w-full xl:2/5 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-[#8aa4ed]">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-[#B8C5F9] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        {/* stats on the left side of the hero section */}
        <div className="flex items-start justify-start gap-16 mt-20 flex-wrapxs max-sm:gap-6">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* right side of the hero section  */}
      {/* BigShoeImg */}
      <div className="relative flex items-center justify-center w-full bg-center bg-cover xl:h-screen max-xl:py-10 bg-primary bg-hero">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={500}
          height={500}
          className="relative z-10 object-contain"
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
