import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

export default function Header() {

  const { asPath } = useRouter();

  // hamburger menu
  const [hamburger, setBurgerClass] = useState("hamburger-nonactive");
  const [menu_class, setMenuClass] = useState("menu-hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass("hamburger-active")
      setMenuClass("menu-visible")
    } else {
      setBurgerClass("hamburger-nonactive")
      setMenuClass("menu-hidden")
    }
    setIsMenuClicked(!isMenuClicked);
  }

  // dark and light theme
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;
    
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon className="lg:ml-4 w-8 h-8 bg-slate-400 dark:bg-slate-800 rounded-md text-yellow-500" role="button" onClick={ () => setTheme("light") } />
      )
    } else {
      return (
        <MoonIcon className="lg:ml-4 w-8 h-8 bg-slate-400 dark:bg-slate-800 rounded-md text-gray-900" role="button" onClick={ () => setTheme("dark") } />
      )
    }
  };
  

  return (
    <>
      <header className="flex navbar-fixed top-0 left-0 w-full items-center z-10 dark:bg-black bg-opacity-70">
        <div className="container lg:px-36">
          <div className="flex justify-between relative">
            <div className="px-4">
              <Link href="/" ><a className="font-bold text-2xl block py-6">wrseno <span className="text-primary">•</span></a></Link>
            </div>
            <div className="flex items-center px-4">
              <button id={hamburger} name="hamburger" type="button" className="block absolute right-4 lg:hidden" onClick={updateMenu}>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left dark:bg-white bg-black"></span>
                <span className="hamburger-line-2 transition duration-300 ease-in-out dark:bg-white bg-black"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left dark:bg-white bg-black"></span>
              </button>

              <nav id={menu_class} className="hidden absolute py-5 dark:bg-black bg-white dark:bg-opacity-90 bg-opacity-90 font-semibold
               shadow-lg rounded-lg w-full right-0 top-full dark:text-white lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex items-center">
                  <li className="group"><Link href="/about"><a className={`${asPath === "/about" ? "font-bold border-b-4 rounded-sm border-primary" : ""} text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold`}>About</a></Link></li>
                  <li className="group"><Link href="/achievement"><a className={`${asPath === "/achievement" ? "font-bold border-b-4 rounded-sm border-primary" : ""} text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold`}>Achievements</a></Link></li>
                  <li className="group"><Link href="/project"><a className={`${asPath === "/project" ? "font-bold border-b-4 rounded-sm border-primary" : ""} text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold`}>Projects</a></Link></li>
                  <li className="group"><Link href="/blog"><a className={`${asPath === "/blog" ? "font-bold border-b-4 rounded-sm border-primary" : ""} text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-secondary group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold`}>Blog</a></Link></li>
                  <li className="group py-2 mx-8 lg:mx-4">
                    { renderThemeChanger() }
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}