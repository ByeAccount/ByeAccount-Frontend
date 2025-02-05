import { NavLink } from "react-router";

export function Navbar() {
  return (
    <div>
      <nav className="border-gray-200 bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            end
          >
            <svg
              width="32"
              height="32"
              fill="#000000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M6,12h1v1h6v-1h1v-1h1V5h-1V4h-1V3H7v1H6v1H5v6h1V12z M7,7h1V6h1V5h2v1h1v1h1v2h-1v1h-1v1H9v-1H8V9H7V7z"></path>{" "}
                  <polygon points="17,15 16,15 16,14 4,14 4,15 3,15 3,16 2,16 2,21 4,21 4,18 5,18 5,17 6,17 6,16 14,16 14,17 15,17 15,18 16,18 16,21 18,21 18,16 17,16 "></polygon>{" "}
                  <rect x="16" y="7" width="6" height="2"></rect>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              ByeAccount
            </span>
          </NavLink>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Se connecter
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-cta"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
              <li>
                <NavLink to="/" className="nav-link" aria-current="page">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-website" className="nav-link">
                  Ajouter un site
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
