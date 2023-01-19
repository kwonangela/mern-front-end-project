import './App.css';
import './index.css';
import Home from './screens/Home.jsx';
import Projects from './screens/Projects.jsx';
import EditProject from './screens/EditProject.jsx';
import ProjectDetail from './screens/ProjectDetail.jsx';
import CreateProject from './screens/CreateProject.jsx';
import Nav from './components/Nav.jsx';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/add-project" element={<CreateProject />} />
        <Route path="/projects/:id/edit" element={<EditProject />} />
      </Routes>
    </div>
  );
}

export default App;
