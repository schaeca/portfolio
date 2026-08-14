import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import TeamentialCaseStudy from "./pages/TeamentialCaseStudy";
import JiraCaseStudy from "./pages/JiraCaseStudy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/work/teamential" element={<TeamentialCaseStudy/>}/>

      <Route path="/work/jira-safe" element={<JiraCaseStudy/>}/>
    </Routes>
  );
}

export default App;