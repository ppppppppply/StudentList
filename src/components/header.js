import Logo from "../image/rsu_p.png";
import "./header.css";
export default function Header(props) {
  const { theme, setTheme } = props;
  function ToggleTheme() {
    if (theme === "light") {
        setTheme("dark")
      
    }
    else{
        setTheme("light")
    }
  }
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
      <div className="container_theme">
        <div className="container_svg">
          {theme === "light" ? 
            <svg onClick={ToggleTheme}
              stroke="#EADFB4"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
           : 
            <svg onClick={ToggleTheme}
              stroke="#EADFB4"
              fill="#EADFB4"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z"
                clip-rule="evenodd"
              ></path>
            </svg>
          }
        </div>
        <a href="/" className="btn_Menu">
          {props.title}
        </a>
      </div>
    </nav>
  );
}
