import { Link } from 'react-router-dom';
import React from 'react'

const Main = () => {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      
      {/* about me card */}
      <div className="group relative rounded-tl-lg rounded-tr-lg bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:rounded-tr-none">
        {/* about me card icon */}
        <div>
          <span className="inline-flex rounded-lg bg-teal-50 p-3 text-teal-700 ring-4 ring-white">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span>
        </div>
        {/* about me card content */}
          <div id="about-me" className="mt-8">
            <h3 className="text-base font-semibold text-gray-900">
              <Link to="/about" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
              About Me
              </Link>
            </h3>
            <p className="mt-2 text-sm text-gray-500">Ophthalmic surgeon with subspecialty surgical training in diseases of the retina, currently employed in the health care sector, with a view to transferring to a software developer role in health or medical reasearch.
            </p>
          </div>
          {/* about me card arrow */}
          <span className="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-400" aria-hidden="true">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>

      {/* portfolio card */}
      <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:rounded-tr-lg">
        {/* portfolio card icon */}
        <div>
          <span className="inline-flex rounded-lg bg-purple-50 p-3 text-purple-700 ring-4 ring-white">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </span>
        </div>
        {/* portfolio card content*/}
        <div id="portfolio" className="mt-8">
          <h3 className="text-base font-semibold text-gray-900">
            <Link to="/portfolio" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true"></span>
              Portfolio
            </Link>
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Programming Languages: Python, JavaScript, TypeScript, SQL, Linux. <br />
            Frameworks & Libraries: Node.js, Express.js, Pandas, Numpy, Matplotlib, Knime <br />
            Data Engineering: Azure <br />
            Web development: Node.js, Flask <br />
            Databases: Postgres <br />
          </p>
        </div>
          {/* portfolio card arrow */}
          <span className="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-400" aria-hidden="true">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      {/* contact card */}
      <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        {/* contact card icon */}
        <div>
          <span className="inline-flex rounded-lg bg-sky-50 p-3 text-sky-700 ring-4 ring-white">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </span>
        </div>
      {/* contact card content*/}
        <div id="contact" className="mt-8">
          <h3 className="text-base font-semibold text-gray-900">
            <Link to="/contact" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true"></span>
            Contact
            </Link>
          </h3>
          <p className="mt-2 text-sm text-gray-500">I am available for hire.</p>
        </div>
        {/* contact card arrow */}
        <span className="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-400" aria-hidden="true">
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
      </div>
      {/* resume card */}
      <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        {/* resume card icon */}
        <div>
          <span className="inline-flex rounded-lg bg-yellow-50 p-3 text-yellow-700 ring-4 ring-white">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
          </span>
        </div>
        {/* resume card content*/}
        <div id="resume" className="mt-8">
          <h3 className="text-base font-semibold text-gray-900">
            <Link to="/resume" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true"></span>
            Resume
            </Link>
          </h3>
          <p className="mt-2 text-sm text-gray-500">Dr Gina Tsanaktsidis MBBS, FRANZCO.</p>
        </div>
        {/* resume card arrow */}
        <span className="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-400" aria-hidden="true">
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
      </div>
      {/* blog card */}
      <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:rounded-bl-lg">
        {/* blog card icon */}
        <div>
          <span className="inline-flex rounded-lg bg-rose-50 p-3 text-rose-700 ring-4 ring-white">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" />
            </svg>
          </span>
        </div>
        {/* blog card content*/}
        <div id='blogposts' className="mt-8">
          <h3 className="text-base font-semibold text-gray-900">
            <Link to="/blogposts" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true"></span>
            Blog
            </Link>
          </h3>
          <p className="mt-2 text-sm text-gray-500">About coding, particle physics, nutrition, exercise, and mychorrhizal networks. As Link medical expert and software developer, my blogposts dive deep into fascinating topics.</p>
        </div>
        {/* blog card arrow */}
        <span className="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-400" aria-hidden="true">
          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
          </svg>
        </span>
      </div>
      {/* journal card */}
      <div className="group relative rounded-bl-lg rounded-br-lg bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:rounded-bl-none">
        {/* journal card icon */}
      <div>
          <span className="inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-700 ring-4 ring-white">
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </span>
        </div>
        {/* journal card content*/}
        <div className="mt-8">
          <h3 className="text-base font-semibold text-gray-900">
            <Link to="/journal-articles" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true"></span>
              Peer Reviewed Journal Articles
            </Link>
          </h3>
          <p className="mt-2 text-sm text-gray-500">Keywords: Primary CNS Lymphoma, Retinopathy of Prematurity, Post-Operative Endophthalmitis</p>
        </div>
            {/* journal card arrow */}
          <span className="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-400" aria-hidden="true">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
      </div>
</div>
)
};

export default Main;