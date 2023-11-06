export default function Hero() {
  return (
    <section
      id="hero"
      //   className="d-flex flex-column justify-content-center align-items-center"
      className="min-h-screen bg-slate-500"
    >
      <div className="hero-container " data-aos="fade-in">
        <h1>Charlie Alonso</h1>
        <p>
          I'm a{" "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Researcher, Problem Solver, Engineer, Self Starter, Artist"
          ></span>
        </p>
      </div>
    </section>
  );
}
