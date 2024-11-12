const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <div className="w-full flex flex-col md:flex-row md:gap-4 items-center justify-center">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-24 h-24 object-cover object-center md:w-20 md:h-20 rounded-full mb-4 md:mb-0 duration-300 hover:scale-150"
        />
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
          Rayan
        </h1>
      </div>
      <p className="text-lg md:text-2xl mb-3 font-medium text-cyan-600">
        Software Engineer & Web Developer
      </p>
      <p className="text-lg lg:text-xl max-w-3xl mb-6 font-semibold text-start">
        I'm a Full Stack Developer with a solid foundation in Computer Science
        and a passion for{" "}
        <span className="text-cyan-600">Web applications</span>.
        <br />I have experience in{" "}
        <span className="text-cyan-600">
          both frontend and backend development
        </span>
        , <br /> including building robust servers using{" "}
        <span className="text-cyan-600">Node.js and Express.js</span>. My
        backend expertise includes managing NoSQL databases, particularly{" "}
        <span className="text-cyan-600">MongoDB</span>, where I work with
        Mongoose.
        <br />
        On the frontend, I work with{" "}
        <span className="text-cyan-600">React</span> and use Redux and Zustand
        for state management, alongside{" "}
        <span className="text-cyan-600">styling libraries</span> like Tailwind
        CSS, Sass, Bootstrap, and Chakra UI. I’ve also built{" "}
        <span className="text-cyan-600">
          animated websites with GSAP and Framer Motion.
        </span>
        <br />
        Additionally, I've experience integrating RESTful APIs and have worked
        with backend services like{" "}
        <span className="text-cyan-600">Appwrite and Firebase</span>.
        <br />
        <span className="text-blue-600 font-bold text-xl">
          Technical Summary:
        </span>{" "}
        C++, HTML, CSS, JavaScript, React, Redux, Zustand, React Query, Node.js,
        Express.js, Socket.io, WebSockets, MongoDB, etc.
      </p>
    </div>
  );
};

export default Intro;
