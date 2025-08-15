export const Home = () => {
  return (
    <section
      id="home"
      // className="min-h-screen flex items-center justify-center relative"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            My Portfolio
          </h1>
           <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            For over a decade, I have delivered robust software solutions as a database and application developer, with a specialty in MS SQL and VB. I have a proven ability to optimise systems, automate processes, and collaborate with stakeholders to solve complex business challenges.
            I am now leveraging this extensive background and embracing new technologies to become a full-stack developer. My current focus is mastering JavaScript and Python through a dedicated training program. I believe my foundation in data-driven problem-solving offers a unique and powerful perspective, allowing me to build comprehensive applications that are as strong on the front-end as they are on the back-end.         </p>
          <div className="flex justify-center space-x-4">


            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
    </section>
  );
};

