const projects = [
    {
        title: "Weather App",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
        link: "https://github.com/twoj-login/",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "ToDo App",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
        link: "https://github.com/twoj-login/",
        image: "https://via.placeholder.com/300x200"
    }
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Moje Projekty</h2>
            <div className="project-grid">
                {projects.map((p, index) => (
                    <div className="project-card" key={index}>
                        <img src={p.image} alt={p.title} />
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <a href={p.link} target="_blank" rel="noreferrer">Zobacz projekt</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
