import workItems from '../data';

function Work() {
  return (
    <>
      <h4 className="text-center" id="portfolio-section">Portfolio</h4>
      <section className="work-output">
        {/* only use the indx on the map if we don't have another unique identifier */}
        {workItems.map((workObj, index) => (
          <article style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${workObj.backgroundImage})` }}>
              <a key={index} href={workObj.link} target="_blank" rel="noopener noreferrer">
              <h5>{workObj.title}</h5>
              <p>{workObj.description}</p>
          </a>
            </article>
        ))}
        </section>
    </>
  );
}

export default Work;