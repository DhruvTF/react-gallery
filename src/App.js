import "./App.css";
import { Route, Routes,  useLocation } from "react-router-dom";

// importing pages
import Homepage from "../src/pages/Homepage";
import NotFound from "./components/notFound/NotFound";
// import context
import ImagesContextProvider from "./components/context/ImagesContext";
function App() {
  const location = useLocation();
  const search = location.pathname.split("/")[2];
  return (
    <ImagesContextProvider>
      <div className="App">
        <Routes>
          <Route path="*" element={<Homepage searchItem="mountain" />} />
          <Route
            path="/mountain"
            element={<Homepage searchItem="mountain" />}
          />
          <Route path="/" element={<Homepage searchItem="mountain" />} />
          <Route path="/bird" element={<Homepage searchItem="bird" />}></Route>
          <Route path="/food" element={<Homepage searchItem="food" />}></Route>
          <Route
            path="/beach"
            element={<Homepage searchItem="beach" />}
          ></Route>
          <Route
            path="/search"
            element={<Homepage searchItem="mountain" />}
          ></Route>
          <Route
            path="/search/:item/*"
            element={<Homepage searchItem={search} />}
          />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </ImagesContextProvider>
  );
}

export default App;
