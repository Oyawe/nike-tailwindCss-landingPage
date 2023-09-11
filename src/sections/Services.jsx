import { services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => {
        return (
          <ServiceCard
            key={service.label}
            imageURL={service.imgURL}
            label={service.label}
            subtext={service.subtext}
          />
        );
      })}
    </section>
  );
};

export default Services;
