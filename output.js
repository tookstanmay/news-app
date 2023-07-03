<Routes>
  <Route
    exact
    key={"home"}
    path="/"
    element={<News pageSize={"5"} country={"us"} category={"general"} />}
  />
  {/* <Route
              exact
              key={"general"}
              path="/general"
              element={
                <News pageSize={"5"} country={"us"} category={"general"} />
              }
            /> */}
  <Route
    exact
    key={"entertainment"}
    path="/entertainment"
    element={<News pageSize={"5"} country={"us"} category={"entertainment"} />}
  />
  <Route
    exact
    key={"science"}
    path="/science"
    element={<News pageSize={"5"} country={"us"} category={"science"} />}
  />
  <Route
    exact
    key={"sports"}
    path="/sports"
    element={<News pageSize={"5"} country={"us"} category={"sports"} />}
  />
  <Route
    exact
    key={"health"}
    path="/health"
    element={<News pageSize={"5"} country={"us"} category={"health"} />}
  />
  <Route
    exact
    key={"business"}
    path="/business"
    element={<News pageSize={"5"} country={"us"} category={"business"} />}
  />
  <Route
    exact
    key={"technology"}
    path="/technology"
    element={<News pageSize={"5"} country={"us"} category={"technology"} />}
  />
</Routes>;
