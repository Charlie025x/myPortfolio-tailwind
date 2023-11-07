import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      //   className="d-flex flex-column justify-content-center align-items-center"
      className="flex min-h-screen w-full items-center justify-center bg-slate-500 bg-hero-img bg-fixed"
    >
      <div className="hero-container " data-aos="fade-in">
        <h1 className=" text-6xl font-bold text-white">Charlie Alonso</h1>
        <p className="text-2xl font-bold text-white">
          I'm a{" "}
          <span>
            <Typewriter //added Dispay:inline in index.css
              options={{
                strings: ["Developer", "Athlete", "Artist", "Brother", "Son"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
      </div>
    </section>
  );
}
