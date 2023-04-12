const Project = (props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-offset={-100}
      className="project"
    >
      <p>{props.title}</p>
      <img src={props.img}></img>
      <a href={props.link}>view the project</a>
    </div>
  );
};

export default Project;
