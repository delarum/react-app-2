import useState from 'react'

function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Collaborators', path: '/collaborators' },
    { name: 'Contact', path: '/contact' },
  ]
  return (
    <nav className="bg-amber-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">MyLogo</div>
      </div>
    </nav>
  )
}

export default Navbar