import { ServicesRendering } from "../helpers/ServicesRendering";
import { ServicesItem } from "./ServicesItem";

import "../styles/ServicesList.css"

export const ServicesList = () => {
  return (
    <ul className="servicesList">
      {ServicesRendering.map((service) => {
        return (
          <ServicesItem
            key={service.id}
            id={service.id}
            serviceImage={service.serviceImage}
            serviceName={service.serviceName}
            serviceDetail={service.serviceDetail}
            serviceLink={service.serviceLink}
          />
        );
      })}
    </ul>
  );
};
