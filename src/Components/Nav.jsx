import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../Constants/index";

const Nav = () => {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        {/* nav logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        {/* nav links */}
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className=" font-montserrat leading-normal text-lg text-slate-gray hover:text-[#8aa4ed] transition ease-out"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Hamburger menu */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
