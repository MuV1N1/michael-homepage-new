import { Component } from 'react';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggleNavbar = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  //TODO: - Current page getter like make the activated page an other color or so....

  render() {
    return (
      <nav className="border-gray-200 dark:bg-transaprent900 bg-gradient-to-b from-skyBlue/[.6] to-customBlack">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <i className="fa-solid fa-music text-navBarText "></i>
          </a>
          <button
            onClick={this.toggleNavbar} // Calls toggle function
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-transaprent100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-transaprent700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={this.state.isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${this.state.isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transaprent100[.6] dark:bg-transaprent800 md:dark:bg-transaprent900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:textnavBarText" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-transaprent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transaprent dark:hover:text-white md:dark:hover:bg-transparent">Über mich</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-transaprent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transaprent dark:hover:text-white md:dark:hover:bg-transparent">Equipment/Leistungen</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-transaprent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transaprent dark:hover:text-white md:dark:hover:bg-transparent">Galerie</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-transaprent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transaprent dark:hover:text-white md:dark:hover:bg-transparent">Kontakt</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-transaprent md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-transaprent dark:hover:text-white md:dark:hover:bg-transparent">Impressum</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
