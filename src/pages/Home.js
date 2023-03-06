import { useEffect } from "react";
import ProjectDetals from "../componets/ProjectDetals";
import ProjectFrom from "../componets/ProjectFrom";
import { useProjectsContext } from "../hooks/useProjectContext";

const Home = () => {
  const { projects, dispatch } = useProjectsContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };
    getAllProjects();
  }, [dispatch]);

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2 ">
        <h2 className="text-4xl font-medium text-sky-400 mb-10">All Project</h2>
        <div className="project-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectDetals key={project._id} project={project} />
            ))}
        </div>
      </div>
      <ProjectFrom />
    </div>
  );
};

export default Home;
