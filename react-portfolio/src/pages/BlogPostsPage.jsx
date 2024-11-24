import React from 'react'
import portrait from '../assets/portrait.jpg'
import ultraprocesedfoods from '../assets/ultraprocessed.jpg'
import regularexercise from '../assets/regularexercise.jpg'
import quarks from '../assets/quarks.gif'
import mycelium from '../assets/mycelium.webp'

const BlogPosts = () => {
  const posts = [
      {
        id: 1,
        title: 'Ultra-processed Foods',
        href: "https://www.cambridge.org/core/journals/public-health-nutrition/article/ultraprocessed-foods-what-they-are-and-how-to-identify-them/E6D744D714B1FF09D5BCA3E74D53A185",
        description: 'NOVA classifies foods according to the extent and purpose of industrial processing. Ultra-processed foods undergo fractionation of whole foods (typically mono-sourced from corn, wheat, soya and cane, and remnants of intensive live-stock farming) into subtances such as fructose, lactose, modified oils, hydrolysed proteins, soya protein isolate, gluten and whey protein. These substances are subsequently submitted to a series of industrial processing techniques such as hydrolysis and hydrogenation, followed by reassembly using extrusion and moulding, and lastly addition of colours, flavour enhancers, emulsifiers and micro-plastics. These industrial processes result in hyper-palatable products with high calorific and low nutritional value, and combined with sophisticated packaging to attract and obfuscate consumers, are contributing to an obesity epidemic and associated morbidities such as type 2 diabetes mellitus.',
        imageUrl:
          ultraprocesedfoods,
        date: 'Nov 23, 2024',
        datetime: '2024-11-23',
        category: { title: 'Nutrition', href: 'https://www.cambridge.org/core/journals/public-health-nutrition/article/ultraprocessed-foods-what-they-are-and-how-to-identify-them/E6D744D714B1FF09D5BCA3E74D53A185' },
        author: {
          name: 'Gina Tsanaktsidis',
          role: 'Software Developer & Ophthalmologist',
          href: '/about',
          imageUrl: portrait,
        },
      },
      {
        id: 2,
        title: 'Regular exercise',
        href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9923435/#:~:text=Exercise%20impacts%20the%20major%20hallmarks,well%20as%20repair%20and%20regeneration.',
        description: 'Regular moderate intensity exercise decreases the risk of cardiovascular disease, type 2 diabetes mellitus and stroke. The biology of exercise is complex and involves adaptive responses in multiple organ systems. Specifically, regualr exrecise maintains local homeostatsis, protects the integrity of the blood-brain barrier, promotes repair and regeneration of tissues, enhances circadian rhythms, and supports anti-inflammatory regulation.',
        imageUrl:
          regularexercise,
        date: 'Nov 23, 2024',
        datetime: '2024-11-23',
        category: { title: 'Exercise', href: '#' },
        author: {
          name: 'Gina Tsanaktsidis',
          role: 'Software Developer & Ophthalmologist',
          href: '/about',
          imageUrl: portrait,
        },
      },
      {
        id: 3,
        title: 'Quarks',
        href: 'http://www.physics.adelaide.edu.au/theory/staff/leinweber/VisualQCD/Nobel/index.html?mc_cid=856bb62fce&mc_eid=c4c5b65509',
        description: "The physicist Derek Leinweber of the University of Adelaide generates supercomputer simulations that capture the various behaviors of quarks and “gluon” particles, carriers of the strong force. The animation illustrates the typical four-dimensional structure of gluon-field configurations describing the vacuum properties of QCD. The volume of the box is 2.4 by 2.4 by 3.6 fm, and after smoothing the gluon field, a lumpy structure reminiscent of a lava lamp is revealed. This is the QCD Lava Lamp. The animaton was featured in Prof. Frank Wilczek's 2004 Nobel Prize Lecture.",
        imageUrl:
          quarks,
        date: 'Nov 23, 2024',
        datetime: '2024-11-23',
        category: { title: 'Particle Physics', href: '#' },
        author: {
          name: 'Gina Tsanaktsidis',
          role: 'Software Developer & Ophthalmologist',
          href: '/about',
          imageUrl: portrait,
        },
      },
      {
        id: 4,
        title: 'Underground mycorrhizal networks',
        href: 'https://www.researchgate.net/profile/Muhammad-Touseef-6/publication/377160765_Exploring_the_complex_underground_social_networks_between_plants_and_mycorrhizal_fungi_known_as_the_wood_wide_web/links/6597efd56f6e450f19ce1946/Exploring-the-complex-underground-social-networks-between-plants-and-mycorrhizal-fungi-known-as-the-wood-wide-web.pdf',
        description: 'In Plant Science Archives March 2023, the author M. Toussef writes that mycorrhizal fungi form symbiotic relationships with the roots of around 90% of plant species, connecting multiple plants through underground networks. This biologically based "wood wide web" facilitates resource transfers between plants and is hypothesized to act as an underground communication system.',
        imageUrl:
          mycelium,
        date: 'Nov 23, 2024',
        datetime: '2024-11-23',
        category: { title: 'Botany', href: '#' },
        author: {
          name: 'Gina Tsanaktsidis',
          role: 'Software Developer & Ophthalmologist',
          href: '/about',
          imageUrl: portrait,
        },
      }
      // More posts...
    ]
  
  
return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
              <p className="mt-2 text-lg/8 text-gray-600">As a medical expert and developer, my blogposts dive deep into fascinating topics.</p>
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {posts.map((post) => (
                  <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                    <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <img
                        alt=""
                        src={post.imageUrl}
                        className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                          {post.date}
                        </time>
                        <a
                          href={post.category.href}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.category.title}
                        </a>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 text-sm/6 text-gray-600">{post.description}</p>
                      </div>
                      <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                        <div className="relative flex items-center gap-x-4">
                          <img alt="" src={post.author.imageUrl} className="h-10 w-8 rounded-md bg-gray-50" />
                          <div className="text-sm/6">
                            <p className="font-semibold text-gray-900">
                              <a href={post.author.href}>
                                <span className="absolute inset-0" />
                                {post.author.name}
                              </a>
                            </p>
                            <p className="text-gray-600">{post.author.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

export default BlogPosts