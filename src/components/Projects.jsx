const projects = [
    {
        title: "Weather App",
        description: "Aplikacja pogodowa z API OpenWeatherMap.",
        link: "https://github.com/twoj-login/weather-app",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "ToDo App",
        description: "Lista zadań z lokalnym zapisem danych.",
        link: "https://github.com/twoj-login/todo-app",
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
