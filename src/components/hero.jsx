export default function Hero() {
  return (
    <section
      id="hero"
      //   className="d-flex flex-column justify-content-center align-items-center"
      className="flex min-h-screen w-full items-center justify-center bg-slate-500 bg-hero-img bg-fixed"
    >
      <div className="hero-container " data-aos="fade-in">
        <h1 className="text-3xl font-bold text-white ">Charlie Alonso</h1>
        <p className="text-2xl font-bold text-white ">
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
