/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProjectCard = ({
  name,
  link,
  tech1,
  tech2,
  tech3,
  imagelink,
  // eslint-disable-next-line react/prop-types
  description,
}) => {
  /* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

  return (
    <div className="card bg-base-100 w-80 shadow-xl mt-10 ml-10 mr-10">
      <figure>
        <img src={imagelink} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <a href={link} className="font-bold hover:underline">
          Live Demo
        </a>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tech1 && <div className="badge badge-outline">{tech1}</div>}
          {tech2 && <div className="badge badge-outline">{tech2}</div>}
          {tech3 && <div className="badge badge-outline">{tech3}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
