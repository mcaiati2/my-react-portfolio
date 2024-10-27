import workItems from '../data';

function Work() {
  return (
    <>
      <h4 className="text-center">My Work</h4>
      <section id="work" className="work-output">
        {/* only use the indx on the map if we don't have another unique identifier */}
        {workItems.map((workObj, index) => (
          <a key={index} href={workObj.link} target="_blank" rel="noopener noreferrer">
            <article style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${workObj.backgroundImage})` }}>
            <h5>{workObj.title}</h5>
            <p>{workObj.description}</p>
          </article>
          </a>
        ))}
      </section>
    </>
  );
}

export default Work;