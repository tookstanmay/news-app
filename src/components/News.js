import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateOnClick = async () => {
    props.changeProgress(30);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let rawData = await fetch(url);
    let data = await rawData.json();

    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    props.changeProgress(100);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let rawData = await fetch(url);
    let data = await rawData.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    setLoading(false);
  };

  const capitalize = (input) => {
    return input
      .toString()
      .replace(/(^|\. *)([a-z])/g, function (match, separator, char) {
        return separator + char.toUpperCase();
      });
  };

  useEffect(() => {
    updateOnClick();
    // eslint-didable-next-line
  }, []);

  document.title = `News House - ${capitalize(props.category)}`;
  return (
    <div className="container mt-3">
      <h1>Top Headlines - {capitalize(props.category)}</h1>
      <div>
        {loading && <Spinner type={"info"} />}
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner type={"danger"} />}
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-5" key={element.url}>
                  <NewsItem
                    title={
                      (element.title
                        ? element.title.slice(0, 45)
                        : "Click on read more. Title not available through author.") +
                      "..."
                    }
                    description={
                      (element.description
                        ? element.description.slice(0, 80)
                        : "Click on read more. Description not available through author.") +
                      "..."
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : `./${props.category}.jpg`
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    date={element.publishedAt ? element.publishedAt : "-"}
                    source={element.source.name ? element.source.name : "unkwn"}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default News;

News.defaultProps = {
  country: "us",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
