import { PortfolioItem } from "./index";
import { projectsData } from "../data/projects";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline underline-offset-8 decoration-4 mb-8 text-stone-900 dark:text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <PortfolioItem
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
