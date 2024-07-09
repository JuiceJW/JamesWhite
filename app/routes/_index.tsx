import type { MetaFunction } from "@remix-run/node";
import Navigation from "~/components/navigation";
import AucklandSkyline from "../../public/images/auckland-skyline.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
        </div>
      </section>

      <footer>
        <div className="container mx-auto">
          <div className="flex justify-end items-center p-4">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/james-dylan-white-8a2b6a1b2/">
                <FaLinkedin size={48} />
              </a>
              <a href="https://www.linkedin.com/in/james-dylan-white-8a2b6a1b2/">
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
