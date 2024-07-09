import type { MetaFunction } from "@remix-run/node";
import Navigation from "~/components/navigation";
import AucklandSkyline from "../../public/images/auckland-skyline.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "James White" },
    { name: "description", content: "Full Stack Software Engineer" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans m-0 p-0">
      <Navigation />
      <section className="h-[100vh]">
        <img
          className="h-[100vh] w-full object-cover grayscale brightness-50"
          src={AucklandSkyline}
          alt=""
        />
        <div className="absolute text-white left-0 top-0 h-[100vh] gap-4 w-full flex flex-col justify-center items-center">
          <h3 className="text-4xl lg:text-6xl font-semibold">
            James Dylan White
          </h3>
          <h4 className="text-2xl lg:text-4xl">Full Stack Software Engineer</h4>
        </div>
      </section>

      <section id="about-me" className="container mx-auto my-16">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Welcome.</h1>

          <p className="text-xl">
            I am James White, a full stack software engineer based in Auckland,
            New Zealand.
          </p>

          <p className="text-xl">
            Bringing four years of comprehensive experience in full-stack
            development to the table, I have honed my skills across a diverse
            range of programming languages and frameworks. My expertise spans
            JavaScript, TypeScript, and Kotlin, enabling me to craft and deploy
            scalable software solutions efficiently. My journey in the tech
            industry has been marked by a relentless pursuit of knowledge and a
            deep commitment to developing applications that not only meet but
            exceed user expectations.
          </p>
        </div>
      </section>

      {/* <section id="portfolio" className="container mx-auto my-16">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Portfolio.</h1>

          <p className="text-xl">
            Here are a few of the projects I have worked on.
          </p>
        </div>
      </section>

      <section id="technologies" className="container mx-auto my-16">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Technologies.</h1>

          <p className="text-xl">
            Here are a few of the technologies I have worked with.
          </p>
        </div>
      </section> */}

      <section id="contact" className="container mx-auto my-16">
        <div className="flex flex-col gap-16 p-4">
          <h1 className="text-6xl font-normal">Contact.</h1>

          <p className="text-xl">
            Get in touch with me through linkedin on the bottom right.
          </p>
        </div>
      </section>

      <footer>
        <div className="container mx-auto">
          <div className="flex justify-end items-center p-4">
            <div className="flex gap-4">
              <span className="justify-self-center self-center">
                © James White 2024
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jamesdylanwhite/"
              >
                <FaLinkedin size={48} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JuiceJW"
              >
                <FaGithub size={48} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/*
      <Portfolio/>
      <Technologies/>
      <Footer /> */}
    </div>
  );
}
