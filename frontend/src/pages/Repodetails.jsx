import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsLink45Deg } from "react-icons/bs";
import HelpCard from "../components/HelpCard";

const Repodetails = () => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const token = import.meta.env.VITE_GitToken;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/MansoorShaik02/repos",
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );

        // Filter out the unwanted repository
        const filteredRepos = response.data.filter(
          (repo) => repo.name !== "WebTechnologiesCodegnan"
        );

        // Sort and select the latest 5 updated repositories
        const sortedRepos = filteredRepos
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 5);

        setRepos(sortedRepos);

        // Fetch languages for the sorted repositories
        const languagesPromises = sortedRepos.map((repo) =>
          axios.get(repo.languages_url, {
            headers: {
              Authorization: `token ${token}`,
            },
          })
        );

        const languagesData = await Promise.all(languagesPromises);
        const languagesObj = languagesData.reduce((acc, { data }, index) => {
          acc[sortedRepos[index].name] = Object.keys(data);
          return acc;
        }, {});
        setLanguages(languagesObj);
      } catch (error) {
        console.error("Error fetching repositories or languages:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="bg-gray flex w-full text-left flex-col min-h-screen">
      <div className="md:text-5xl md:mt-40 md:ml-5 md:b-10 md:text-white text-3xl mb-10 text-white">
        Check my latest GitHub Repos
      </div>
      <div className="md:ml-10 md:mr-10 md:grid md:grid-cols-3 md:gap-4 grid grid-cols-1">
        {repos.map((repo) => (
          <HelpCard
            key={repo.id}
            title={repo.name}
            description={`Last updated: ${new Date(
              repo.updated_at
            ).toLocaleDateString()} | Languages: ${
              languages[repo.name]?.join(", ") || "N/A"
            }`}
            link={repo.html_url}
            linkText="View on GitHub"
          />
        ))}
      </div>
    </div>
  );
};

export default Repodetails;
