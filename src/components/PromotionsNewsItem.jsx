import "../styles/PromotionsNewsItem.css";

export const PromotionsNewsItem = ({
  id,
  newsImage,
  newsName,
  newsDate,
  newsDetail,
  newsLink,
}) => {
  return (
    <li className="newsItem" id={id} key={id}>
      <img src={newsImage} alt={newsName + "-image"} />
      <h3>{newsName}</h3>
      <time>{newsDate}</time>
      <p>{newsDetail}</p>
      <a href={newsLink} className="newsLink">Подробнее</a>
    </li>
  );
};
