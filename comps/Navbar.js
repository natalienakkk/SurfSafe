import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  // return (
  //   <nav>
  //     <div className="logo">
  //       <Image src="/logo.png" alt="site logo" width={140} height={140} />
  //     </div>
  //     <Link href="/">Mohhannad</Link>
  //     <Link href="/about">About</Link>
  //     <Link href="/ninjas/">Ninja Listing</Link>
  //   </nav>
  // );
  return (
    <nav className="navbar">
      <div className="logo-and-title">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="title">Surf Safe</h1>
      </div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;