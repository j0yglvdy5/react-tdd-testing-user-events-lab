import { useState } from "react";

function App() {
  const [contactName, setContactName] = useState("");
  const updateContactName = (e) => setContactName(e.target.value)
  const [contactEmail, setContactEmail] = useState("");
  const updateContactEmail = (e)=> setContactEmail(e.target.value)
  const [areasOfInterest, setAreasOfInterest] = useState({
    frontend: false,
    backend: false,
    mobile: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAreasOfInterest(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (
    <main>
      <h1>Hi, I'm Joy</h1>
      <img alt="My profile pic" src="src/gladoo.jpeg" target="blank" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form>
        <div>
          <h3>Contact information</h3>
          <label htmlFor="name">Your Name:</label>
          <input type="text" value={contactName} id="name" name="name" placeholder="Your Name" onChange={updateContactName}/>
          <label htmlFor="email">Your Email:</label>
          <input type="email" value={contactEmail} id="email" name="email" placeholder="Your Email Address" onChange={updateContactEmail}/>
        </div>
        <div>
        <label>
            <input
              type="checkbox"
              name="frontend"
              checked={areasOfInterest.frontend}
              onChange={handleCheckboxChange}
            />
            Frontend Development
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="backend"
              checked={areasOfInterest.backend}
              onChange={handleCheckboxChange}
            />
            Backend Development
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="mobile"
              checked={areasOfInterest.mobile}
              onChange={handleCheckboxChange}
            />
            Mobile Development
          </label>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

export default App;
