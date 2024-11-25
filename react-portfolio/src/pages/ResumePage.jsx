import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const ResumePage = () => {
  return (
    <div className="bg-gray-900">
      <div className="mt-6 border-t border-white/10 pl-40 pr-40">
        <dl className="divide-y divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-200">Name</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Dr Gina Tsanaktsidis</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-200">Application for</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">Full-Stack Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-200">Email address</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">ginadrcoder@gmail.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-200">Salary expectation</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">$150,000 AU</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-200">About</dt>
            <dd className="mt-1 text-sm/6 text-gray-400 sm:col-span-2 sm:mt-0">
            Ophthalmic surgeon with subspecialty surgical training in diseases of the retina, currently employed in the health care sector, with a view to transferring to a software developer role in health or medical research.
            Awarded an MBBS at Flinders University in 1993 and subsequently trained at the Sydney Eye Hospital, becoming a fellow of the Royal Australian and New Zealand College of Ophthalmologists in January 2001. Successfully completed two fellowships in vitreoretinal surgery at Westmead Hospital, Sydney and The Western Eye Hospital, London. <br />
            My tech studies are more recent but abreast of current paradigms in software development. I am  currently enrolled in a Full Stack Web Development Bootcamp at the University of Sydney.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-200">Attachments</dt>
            <dd className="mt-2 text-sm text-white sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-white/10 rounded-md border border-white/20">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_full_stack_developer.pdf</span>
                      <span className="shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="ftp://u883134181@92.112.182.58/.filebrowser/cv-2024.pdf" className="font-medium text-indigo-400 hover:text-indigo-300">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_full_stack_developer.pdf</span>
                      <span className="shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ResumePage