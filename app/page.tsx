import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1 className="mb-8 text-3xl font-bold tracking-tight border-b border-gray-300">
        Alexander Aljabari - Fullstack Software Engineer
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 text-blue-600">
              Personal Information
            </h2>
            <div className="mt-2">
              <div className="mb-2 text-gray-800">
                <strong>Name:</strong> Alexander Aljabari
              </div>
              <div className="mb-2 text-gray-800">
                <strong>Phone:</strong> +359 89 570 5734
              </div>
              <div className="mb-2 text-gray-800">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:alexandaraj9@gmail.com"
                  className="text-blue-600 underline"
                >
                  alexandaraj9@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 text-blue-600">
              About Me
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Results-oriented and highly skilled software engineer with over 4
              years of experience in building web and mobile applications.
              Proficient in creating efficient and scalable solutions while
              adhering to industry best practices. Committed to staying updated
              with emerging technologies and continuously improving coding
              skills, project management expertise, software architecture
              design, and best practices in development.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 text-blue-600">
              Skills
            </h2>
            <ul className="list-none p-0 m-0 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">🚀</span> Programming Languages:
                JavaScript, TypeScript, Python, Swift
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌐</span> Web Development: React,
                Next.js, Node.js, Express.js
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span> Mobile Development: React
                Native, Expo, SwiftUI
              </li>
              <li className="flex items-center">
                <span className="mr-2">☁️</span> Cloud Services: Google Cloud
                Platform, Firebase
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎯</span> Agile Methodologies: Jira,
                Confluence, Trello
              </li>
              <li className="flex items-center">
                <span className="mr-2">📚</span> Version Control: Git, GitHub,
                GitLab
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔍</span> Problem Solving and
                Troubleshooting
              </li>
              <li className="flex items-center">
                <span className="mr-2">✅</span> Testing: Jest, Cypress,
                Selenium
              </li>
              <li className="flex items-center">
                <span className="mr-2">🐳</span> DevOps: Docker, GitHub Actions
              </li>
              <li className="flex items-center">
                <span className="mr-2">💾</span> Databases: MongoDB, Redis, SQL
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 text-blue-600">
              Education
            </h2>
            <h3 className="font-semibold text-gray-800">
              Computer Systems and Technologies
            </h3>
            <p className="text-sm text-gray-700">
              Bachelor's Degree, Technical University of Varna, 2016 - 2020
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 text-blue-600">
              Certifications
            </h2>
            <h3 className="font-semibold text-gray-800">
              Fullstack app development with React and Node
            </h3>
            <ul className="list-disc ml-4 text-sm text-gray-700">
              <li>University of Helsinki</li>
              <li>Issued: 2020 - 2021</li>
              <li>
                <a
                  href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/41ef639080909178958a4c0c9fc81c65"
                  className="text-blue-600 underline"
                >
                  View Certification
                </a>
              </li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4">Docker</h3>
            <ul className="list-disc ml-4 text-sm text-gray-700">
              <li>University of Helsinki</li>
              <li>Issued: 2021</li>
              <li>
                <a
                  href="https://studies.cs.helsinki.fi/stats/api/certificate/docker2021/en/0720bd19296ae7d8d1b2895c698c1412"
                  className="text-blue-600 underline"
                >
                  View Certification
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 text-blue-600">
              Languages
            </h2>
            <ul className="list-disc ml-4 text-sm text-gray-700">
              <li>English: Cambridge Advanced C1</li>
              <li>Bulgarian: Native</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 text-blue-600">
              Experience
            </h2>
            <h3 className="font-semibold text-gray-800">Software Developer</h3>
            <h4 className="font-semibold text-gray-800">
              Quanterall (March 2020 - Present)
            </h4>

            <ul className="list-disc ml-4 text-sm text-gray-700 space-y-2">
              <li>
                Collaborated with a team of developers to design, develop, and
                implement React-based web applications, ensuring scalability,
                performance, and usability.
              </li>
              <li>
                Collaborated closely with the client’s upper management to
                enhance existing features, implement new functionalities, and
                drive business growth initiatives.
              </li>
              <li>
                Built responsive and user-friendly interfaces using React, CSS,
                and other front-end technologies, following UI/UX design
                guidelines.
              </li>
              <li>
                Integrated RESTful APIs and handled data using Node.js and
                MongoDB for efficient back-end operations.
              </li>
              <li>
                Successfully integrated third-party APIs into the backend,
                providing additional functionality and improving overall system
                capabilities.
              </li>
              <li>
                Deployed applications and services on Google Cloud Platform.
              </li>
              <li>
                Deployed mobile applications to Google Play and App Store,
                following the respective guidelines and requirements.
              </li>
              <li>
                Conducted code reviews, identified bugs, and implemented
                enhancements to improve the overall quality and functionality of
                the applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
