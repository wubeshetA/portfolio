import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
} from "react-icons/fa";

const SkillsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaHtml5 className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">HTML</h3>
              <p className="text-gray-700">
                Experienced in creating semantic and accessible markup with
                HTML5.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaCss3Alt className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">CSS</h3>
              <p className="text-gray-700">
                Intermediate level of experience with CSS3 and styling with
                Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaJs className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">JavaScript</h3>
              <p className="text-gray-700">
                Experienced in writing client-side JavaScript code and using
                modern frameworks like React.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaPython className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Python</h3>
              <p className="text-gray-700">
                Experienced in programming with Python and developing
                applications with Flask.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaJava className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Java</h3>
              <p className="text-gray-700">
                Basic level of experience with Java programming language.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaAws className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2"> AWS</h3>
              <p className="text-gray-700">
                Intermediate level of experience with Amazon Web Services (AWS)
                and cloud computing.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaDocker className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Docker</h3>
              <p className="text-gray-700">
                Experienced in containerizing applications with Docker.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <FaKubernetes className="text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Kubernetes</h3>
              <p className="text-gray-700">
                Intermediate level of experience with Kubernetes and container
                orchestration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
