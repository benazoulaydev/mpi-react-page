import { Helmet } from "react-helmet-async";
import logo from "../logo.svg";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>My Perfect Invitation</title>
        <meta property="iframely:title" content="…" />
        <meta property="iframely:description" content="…" />
        <meta property="iframely:image" content="…" />
        <meta property="og:title" content="My Perfect Invitation" />
        <meta
          property="og:description"
          content="Create components easily for your website."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta
          property="og:url"
          content="https://benazoulaydev.github.io/mpi-react-page/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="Components" />
        <meta name="twitter:title" content="My Perfect Invitation" />
        <meta
          name="twitter:description"
          content="Create components easily for your website."
        />
        <meta
          name="twitter:image"
          content="https://example.com/twitter-image.jpg"
        />
      </Helmet>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React With Swaraj
          </a>
        </header>
      </div>
    </>
  );
};

export default HomePage;
