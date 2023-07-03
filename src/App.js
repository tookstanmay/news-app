import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(30);

  const changeProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      <Router>
        <div>
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
            loaderSpeed={500}
          />
          <Navbar />
          <Switch>
            <Route key={"general"} exact path="/">
              <News
                apiKey={process.env.REACT_APP_NEWS_API}
                changeProgress={changeProgress}
                category="general"
              />
            </Route>
            <Route key={"general"} exact path="/general">
              <News
                apiKey={process.env.REACT_APP_NEWS_API}
                changeProgress={changeProgress}
                category="general"
              />
            </Route>
            <Route key={"entertainment"} exact path="/entertainment">
              <News
                apiKey={process.env.REACT_APP_NEWS_API}
                changeProgress={changeProgress}
                category="entertainment"
              />
            </Route>
            <Route key={"sports"} exact path="/sports">
              <News
                apiKey={process.env.REACT_APP_NEWS_API}
                changeProgress={changeProgress}
                category="sports"
              />
            </Route>
            <Route key={"business"} exact path="/business">
              <News
                apiKey={process.env.REACT_APP_NEWS_API}
                changeProgress={changeProgress}
                category="business"
              />
            </Route>
            <Route key={"technology"} exact path="/technology">
              <News
                apiKey={process.env.REACT_APP_NEWS_API}
                changeProgress={changeProgress}
                category="technology"
              />
            </Route>
            <Route key={"health"} exact path="/health">
              <News
                apiKey={process.env.REACT_APP_NEWS_API}
                changeProgress={changeProgress}
                category="health"
              />
            </Route>
            <Route key={"science"} exact path="/science">
              <News
                apiKey={process.env.REACT_APP_NEWS_API}
                changeProgress={changeProgress}
                category="science"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
