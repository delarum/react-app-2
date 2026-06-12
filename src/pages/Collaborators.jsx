import { useState } from 'react'

const collaborators = [
  {
    id: 1,
    name: 'Amara Osei',
    role: 'Lead Designer',
    department: 'Creative',
    bio: 'Crafting intuitive interfaces with 8 years of product design experience across fintech and healthtech.',
    avatar: 'AO',
    color: 'bg-amber-500',
    github: '#',
    linkedin: '#',
    twitter: '#',
    location: 'Accra, Ghana',
  },
  {
    id: 2,
    name: 'James Mwangi',
    role: 'Full-Stack Engineer',
    department: 'Engineering',
    bio: 'Building scalable systems with React, Node, and PostgreSQL. Passionate about clean code and developer experience.',
    avatar: 'JM',
    color: 'bg-orange-600',
    github: '#',
    linkedin: '#',
    twitter: '#',
    location: 'Nairobi, Kenya',
  },
  {
    id: 3,
    name: 'Sofia Andrade',
    role: 'Product Manager',
    department: 'Product',
    bio: 'Bridging user needs and business goals with data-driven product strategy and stakeholder alignment.',
    avatar: 'SA',
    color: 'bg-yellow-600',
    github: '#',
    linkedin: '#',
    twitter: '#',
    location: 'Lagos, Nigeria',
  },
  {
    id: 4,
    name: 'Liam Chen',
    role: 'Data Scientist',
    department: 'Data',
    bio: 'Transforming raw data into actionable insights using machine learning and statistical modelling.',
    avatar: 'LC',
    color: 'bg-amber-700',
    github: '#',
    linkedin: '#',
    twitter: '#',
    location: 'Cape Town, SA',
  },
  {
    id: 5,
    name: 'Nadia Kowalski',
    role: 'DevOps Engineer',
    department: 'Engineering',
    bio: 'Automating infrastructure and CI/CD pipelines to keep deployments fast, reliable, and secure.',
    avatar: 'NK',
    color: 'bg-orange-500',
    github: '#',
    linkedin: '#',
    twitter: '#',
    location: 'Cairo, Egypt',
  },
  {
    id: 6,
    name: 'Kwame Asante',
    role: 'Marketing Lead',
    department: 'Marketing',
    bio: 'Growing brand presence through compelling storytelling and data-informed digital campaigns.',
    avatar: 'KA',
    color: 'bg-amber-600',
    github: '#',
    linkedin: '#',
    twitter: '#',
    location: 'Kumasi, Ghana',
  },
]

const departments = ['All', ...new Set(collaborators.map(c => c.department))]

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

function CollaboratorCard({ collaborator }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-amber-100 hover:-translate-y-1">
      <div className={`${collaborator.color} h-24 relative`}>
        <span className="absolute bottom-0 left-6 translate-y-1/2 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-xl shadow-md" style={{ backgroundColor: 'inherit' }}>
          <span className={`w-full h-full rounded-full flex items-center justify-center ${collaborator.color}`}>
            {collaborator.avatar}
          </span>
        </span>
        <span className="absolute top-3 right-4 text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
          {collaborator.department}
        </span>
      </div>

      <div className="pt-12 px-6 pb-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900">{collaborator.name}</h3>
          <p className="text-amber-600 text-sm font-medium">{collaborator.role}</p>
          <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {collaborator.location}
          </p>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed flex-1">{collaborator.bio}</p>

        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
          {[
            { href: collaborator.github, icon: <GitHubIcon />, label: 'GitHub' },
            { href: collaborator.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn' },
            { href: collaborator.twitter, icon: <TwitterIcon />, label: 'Twitter' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
          <button className="ml-auto text-xs font-semibold text-amber-700 border border-amber-300 hover:bg-amber-700 hover:text-white px-4 py-1.5 rounded-full transition-colors duration-200">
            Connect
          </button>
        </div>
      </div>
    </div>
  )
}

function Collaborators() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = collaborators.filter(c => {
    const matchDept = active === 'All' || c.department === active
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase())
    return matchDept && matchSearch
  })

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="bg-linear-to-br from-amber-700 via-amber-600 to-orange-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-amber-200 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Meet Our Collaborators
          </h1>
          <p className="text-amber-100 text-lg max-w-xl mx-auto">
            A diverse, talented group of people working together to build something great.
          </p>

          {/* Search */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-md">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name or role…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b border-amber-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-8">
          {[
            { label: 'Total Members', value: collaborators.length },
            { label: 'Departments', value: departments.length - 1 },
            { label: 'Countries', value: 5 },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-amber-700">{value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter tabs */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActive(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === dept
                  ? 'bg-amber-700 text-white shadow-md shadow-amber-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-700'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(c => (
              <CollaboratorCard key={c.id} collaborator={c} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-lg font-medium">No collaborators found</p>
            <p className="text-sm mt-1">Try a different filter or search term.</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="bg-amber-700 text-white py-14 px-4 mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Want to join our team?</h2>
          <p className="text-amber-100 mb-6 text-sm">
            We're always looking for passionate people. Reach out and let's build something together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-amber-700 font-semibold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors duration-200 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default Collaborators
