import { PromotionsNewsRendering } from "../helpers/renders/PromotionsNewsRendering";
import { PromotionsNewsItem } from "./PromotionsNewsItem";

import "../styles/PromotionsNewList.css";

export const PromotionsNewsList = () => {
  return (
    <ul className="newsList">
      {PromotionsNewsRendering.map((news) => {
        return (
          <PromotionsNewsItem
            key={news.id}
            id={news.id}
            newsImage={news.newsImage}
            newsName={news.newsName}
            newsDate={news.newsDate}
            newsDetail={news.newsDetail}
            newsLink={news.newsLink}
          />
        );
      })}
    </ul>
  );
};
