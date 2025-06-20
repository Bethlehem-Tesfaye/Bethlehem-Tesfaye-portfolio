import React from "react";
import resapp from "../../assets/resapp.png";
import noteapp from "../../assets/noteapp.png";
import bookapp from "../../assets/bookapp.png";
import ecapp from "../../assets/ecapp.png";
import realapp from "../../assets/realapp.png";
import authapp from "../../assets/authapp.png";
import "./projects.css";
function Projects() {
  return (
    <div className="prjContainer" id="prj">
      <h2>PROJECTS</h2>
      <div className="prjBox">
        <div className="prj">
          <div className="prjimg">
            <img src={resapp} alt="image" />
          </div>
          <div className="prjdes">
            <p>Restrant app </p>
            <p>
              A responsive restaurant management web app that allows customers
              to place orders and admins to manage menus, track orders, and
              handle receipts.
            </p>
          </div>
          <div className="used">
            <div>html</div>
            <div>css</div>
            <div>js</div>
            <div>php</div>
            <div>mysql</div>
          </div>
          <div className="links">
            <button>
              <a
                href="https://phpresturnatwebapp.infinityfreeapp.com
"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/Bethlehem-Tesfaye/resturant-app-php-mysql"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </button>
          </div>{" "}
          <br />
          <div className="links">
            <p>
              {/* <strong>Admin Demo</strong> */}
            </p>
            <button>
              <a
                href="https://phpadminresturantapp.infinityfreeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin Demo
              </a>
            </button>
            <p className="credentials-note">
              <em>Username: beth_lehem Password: admin123</em>
            </p>
          </div>
        </div>

        <div className="prj">
          <div className="prjimg">
            <img src={authapp} alt="image" />
          </div>
          <div className="prjdes">
            <p>Complete Mern Authentication system </p>
            <p>
              A full-featured authentication system built with the MERN stack.
              Includes secure user registration, login, logout, email
              verification via OTP, password reset and protected routes using
              JWT and cookies.
            </p>
          </div>
          <div className="used">
            <div>React</div>
            <div>Tailwind CSS</div>
            <div>Node.js</div>
            <div>Express</div>
            <div>MongoDB</div>
          </div>
          <div className="links">
            <button>
              <a
                href="https://complete-mern-authentication-system-1.onrender.com/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </button>
            <button>
              <a href="https://github.com/Bethlehem-Tesfaye/complete-mern-Authentication-system">
                Source
              </a>
            </button>
          </div>
        </div>

        <div className="prj">
          <div className="prjimg">
            <img src={noteapp} alt="image" />
          </div>
          <div className="prjdes">
            <p>Note App</p>
            <p>
              A responsive full-stack note-taking app that lets users securely
              create, edit, delete, and search notes with a clean, user-friendly
              interface.
            </p>
          </div>
          <div className="used">
            <div>React</div>
            <div>Tailwind CSS</div>
            <div>Node.js</div>
            <div>Express</div>
            <div>MongoDB</div>
          </div>

          <div className="links">
            <button>
              <a
                href="https://client-note-app-mern-stackk.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/Bethlehem-Tesfaye/NOTE-APP-MERN-STACK"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </button>
          </div>
        </div>

        <div className="prj">
          <div className="prjimg">
            <img src={bookapp} alt="Book App" />
          </div>
          <div className="prjdes">
            <p>Book App</p>
            <p>
              A full-stack book management app that allows users to add, edit,
              delete with an intuitive and clean interface.
            </p>
          </div>
          <div className="used">
            <div>React</div>
            <div>Tailwind CSS</div>
            <div>Node.js</div>
            <div>Express</div>
            <div>MongoDB</div>
          </div>

          <div className="links">
            <button>
              <a
                href="https://client-book-app-mern.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/Bethlehem-Tesfaye/book-app-mern"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </button>
          </div>
        </div>

        <div className="prj">
          <div className="prjimg">
            <img src={ecapp} alt="Ecommerce App" />
          </div>
          <div className="prjdes">
            <p>Ecommerce App</p>
            <p>
              A responsive e-commerce web application where users can browse
              products, add items to their cart or wishlist, and shop seamlessly
              with a modern and intuitive UI.
            </p>
          </div>
          <div className="used">
            <div>React</div>
            <div>CSS</div>
            <div>Vite</div>
          </div>

          <div className="links">
            <button>
              <a
                href="https://ecommerce-react-audg.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/Bethlehem-Tesfaye/ecommerce-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </button>
          </div>
        </div>
        <div className="prj">
          <div className="prjimg">
            <img src={realapp} alt="Real Estate App" />
          </div>
          <div className="prjdes">
            <p>Real Estate App</p>
            <p>
              A responsive real estate web application where users can browse
              property listings, view detailed information, and explore
              locations with a clean, user-friendly interface.
            </p>
          </div>
          <div className="used">
            <div>React</div>
            <div>CSS</div>
            <div>Vite</div>
          </div>

          <div className="links">
            <button>
              <a
                href="https://real-estate-react.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </button>
            <button>
              <a
                href="https://github.com/Bethlehem-Tesfaye/real-estate-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
