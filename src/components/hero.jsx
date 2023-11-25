import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      //   className="d-flex flex-column justify-content-center align-items-center"
      className="flex min-h-screen w-full select-none items-center justify-center bg-slate-500 bg-hero-img bg-cover bg-fixed before:absolute before:inset-0 before:bg-[#00000061]"
    >
      <div className="hero-container z-10" data-aos="fade-in">
        <h1 className=" text-6xl font-bold text-white">Charlie Alonso</h1>
        <p className="text-2xl font-bold text-white">
          I'm a{" "}
          <span>
            <Typewriter //added Dispay:inline in index.css
              options={{
                strings: [
                  "Developer",
                  "Artist",
                  "Skater",
                  "gamer",
                  "self starter",
                ],
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
