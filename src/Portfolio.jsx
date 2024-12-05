import { useState } from 'react';
import Project from "./Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'comingSoon',
      description: 'PlaceHolder1',
      link: "https://github.com/yoseph1618",
      repo: "https://github.com/yoseph1618"
    },
    {
      name: 'comingSoon',
      description: 'PlaceHolder2',
      link: "https://github.com/yoseph1618",
      repo: "https://github.com/yoseph1618"
    },
    {
      name: 'comingSoon',
      description: 'PlaceHolder3',
      link: "https://github.com/yoseph1618",
      repo: "https://github.com/yoseph1618"
    },
    {
      name: 'comingSoon',
      description: 'PlaceHolder4',
      link: "https://github.com/yoseph1618",
      repo: "https://github.com/yoseph1618"
    },
    {
      name: 'comingSoon',
      description: 'PlaceHolder5',
      link: "https://github.com/yoseph1618",
      repo: "https://github.com/yoseph1618"
    },
    {
      name: 'comingSoon',
      description: 'PlaceHolder6',
      link: "https://github.com/yoseph1618",
      repo: "https://github.com/yoseph1618"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
