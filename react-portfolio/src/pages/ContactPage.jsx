import React from 'react'

const ContactPage = () => {
  return (
    <form>
      <div className="bg-gray-900 py-24 px-24 sm:py-32">
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base/7 font-semibold text-white">Your Profile</h2>
            <p className="mt-1 text-sm/6 text-gray-400">
            This information will be displayed publicly so be careful what you share.
            </p>
            {/* your username */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm/6 font-medium text-white">
                  Your Username
                  </label>
                    <div className="mt-2">
                      <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                          <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder=""
                          autoComplete="username"
                          className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm/6"
                          />
                      </div>
                    </div>
                </div>
                {/* about you */}
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm/6 font-medium text-white">
                  About You
                  </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-3 text-sm/6 text-gray-400">Write a few sentences about yourself.</p>
                </div>
          </div>
        </div>
        {/* form */}
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white">Personal Information</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* first name */}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
                First Name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* last name */}
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">
                Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* email */}
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Email Address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* country */}
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-white">
                Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6 [&_*]:text-black"
                  >
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>China</option>
                    <option>Japan</option>
                    <option>Singapore</option>
                    <option>India</option>  
                  </select>
                </div>
              </div>
              {/* street address */}
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm/6 font-medium text-white">
                Street Address
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="street-address"
                    type="text"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* city */}
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm/6 font-medium text-white">
                City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* region */}
              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm/6 font-medium text-white">
                State / Province
                </label>
                <div className="mt-2">
                  <input
                    id="region"
                    name="region"
                    type="text"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* postal code */}
              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-white">
                ZIP / Postal Code
                </label>
                <div className="mt-2">
                  <input
                    id="postal-code"
                    name="postal-code"
                    type="text"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* message */}
              <div className="sm:col-span-4">
                <label htmlFor="message" className="block text-sm/6 font-medium text-white">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                    defaultValue={''}
                  />
                </div>  
              </div>

            </div>
          </div>  
        </div>
        {/* submit */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm/6 font-semibold text-white">
          Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
          Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactPage