import workItems from '../data';

function Work() {
  return (
    <>
      <h4 className="text-center" id="portfolio-section"></h4>
      <section className="work-output">
        {/* only use the indx on the map if we don't have another unique identifier */}
        {workItems.map((workObj, index) => (
          <article style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${workObj.backgroundImage})` }}>
              <h3>{workObj.title}</h3>
              <p>{workObj.description}</p>
              <a href={workObj.repoLink} className="tag-group">GitHub</a>
                {workObj.deployedLink && <a href={workObj.deployedLink} className="tag-group">Live Site</a>}
            </article>
        ))}
        </section>
    </>
  );
}

export default Work;