import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar">
      <div className="logo-and-title">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="title">Surf Safe</h1>
      </div>
      <div className="menu">
      {
        router.pathname === '/start' ?
        <Link href="/" className="linkNav">Home</Link> : // Show "Home" link when on "/start"
        <Link href="/start" className="linkNav">Explore & Engage</Link> // Show "Start" link otherwise
      }
      </div>
    </nav>
  );
}

export default Navbar;