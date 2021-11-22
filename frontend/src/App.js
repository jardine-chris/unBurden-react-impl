import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useState } from "react";

import ProjectList from "./components/project/ProjectList";
import AddProject from "./components/project/AddProject";
import MainNavbar from "./components/navigation/MainNavbar";

function App() {
  const [projectList, setProjectList] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Project 1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Project 2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Project 3",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Project 4",
    },
    {
      id: 5,
      title: "Project 5",
      description: "Project 5",
    },
  ]);

  const addProject = (project) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const newProject = { id, ...project };
    setProjectList([...projectList, newProject]);
  };

  return (
    <BrowserRouter>
      <MainNavbar />
      <main>
        <Switch>
          <Route path="/projects" exact>
            <ProjectList projects={projectList} />
          </Route>
          <Route path="/projects/add">
            <AddProject onAdd={addProject} />
          </Route>

          {/* Redirect all routes not assigned to root */}
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
    // <div>
    //   <ProjectList projects={projectList} />
    //   <AddProject onAdd={addProject} />
    // </div>
  );
}

export default App;
