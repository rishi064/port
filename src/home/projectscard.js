import React from "react";

export default function Projectscard(props) {
  const style = {
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    overflow: " hidden",
  };

  const projects = [
    {
      pName: "tayari ",
      type: "web app",
      img: "../tayari.png",
      description: "A website to prepare for entrance exam",
      key: 1,
      backgroundImage: "cover",
      address: "https://rishi064.github.io/tayari/",
      gitLink: "https://github.com/rishi064/tayari",
    },
    {
      pName: "Mero Planners ",
      type: "web app",
      img: "../mero.png",
      description: "Website to plan your events using OSM  ",
      key: 2,
      backgroundImage: "cover",
      address: "https://rishi064.github.io/meroplanner/",
      gitLink: "https://github.com/rishi064/meroplanner",
    },

    {
      pName: "OSM Hack ",
      type: "web app",
      img: "../osm.png",
      description: "website of OSM Hack 2023",
      key: 6,
      backgroundImage: "cover",
      address: "https://rishi064.github.io/osmhack2023beta",
      gitLink: "https://github.com/rishi064/osmhack2023beta",
    },
  ];
  return (
    <div className="projectcards" id="projectcards" ref={props.refscroll}>
      <h1 style={{ color: `${props.color}` }}>My Projects</h1>
      <div className="cover">
        {projects.map((element) => {
          return (
            <div className="card1" key={element.key}>
              <div
                className="innercard"
                style={{
                  backgroundImage: `url(${element.img})`,
                  width: "100%",
                  height: "100%",

                  backgroundSize: element.backgroundImage,
                  backgroundRepeat: "no-repeat",
                  overflow: " hidden",
                }}
              >
                <div className="card1-info">
                  <p className="title">{element.pName}</p>
                  <p className="subtitle">{element.type}</p>
                </div>
                <div className="card1-bio">
                  <p>{element.description}</p>
                  <a href={element.address} className="link">
                    Visit
                  </a>
                  <a href={element.gitLink} id="gitLink">
                    visit on github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
