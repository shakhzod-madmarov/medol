
import "../styles/ServicesItem.css";

export const ServicesItem = ({
  serviceImage,
  serviceName,
  serviceDetail,
  serviceLink,
  id,
}) => {
  return (
    <li className="servicesItem" id={id}>
      <img src={serviceImage} alt={serviceName + "-image"} />
      <div className="sevicesContent">
        <h3>{serviceName}</h3>
        <p>{serviceDetail}</p>
      </div>
        <a href={serviceLink} className="serviceLink">Подробнее</a>
    </li>
  );
};
