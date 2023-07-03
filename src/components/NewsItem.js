import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="d-flex flex-wrap justify-content-center mx-3 my-3">
      <div className="card">
        <span className="position-absolute top-0 start-50 translate-middle bg-light border border-light rounded">
          <span className="badge text-bg-light">{source}</span>
        </span>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{ height: "13rem" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontFamily: "Roboto", fontWeight: "500" }}
          >
            {title}
          </h5>
          <p
            className="card-text"
            style={{
              fontFamily: "IBM Plex Serif",
              fontWeight: "400",
              fontSize: "15px",
            }}
          >
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
          <p className="card-text mt-2">
            <small className="text-muted">
              by {author} on{" "}
              {new Date(date).toLocaleString().slice(0, 15) + " AM"}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
