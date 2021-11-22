import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </>
  );
};

export default ProjectList;
