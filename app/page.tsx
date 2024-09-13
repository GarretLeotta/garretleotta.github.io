import Head from 'next/head';

export default function Home() {
  return (
    <div>
  <Head>
    <title>Garret Leotta</title>
    <meta name="description" content="A brief overview of my work and projects" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <header>
    <h1>Welcome to My World</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>Projects</h2>
    <div className="twoColumn">
      <div>
        <h3>I{"'"}m Garret Leotta - Software Engineer</h3>
      </div>
      <div>
        <p>picture goes here</p>
      </div>
    </div>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div className="twoColumn">
      <div>
        <h3>HubClub</h3>
      </div>
      <div>
        <p>iOS App</p>
      </div>
    </div>
    <div className="twoColumn">
      <div>
        <h3>StrengthNote</h3>
      </div>
      <div>
        <p>iOS App</p>
      </div>
    </div>
    <div className="twoColumn">
      <div>
        <h3>Herochat</h3>
      </div>
      <div>
        <p>VoIP app & protocol</p>
      </div>
    </div>
  </section>


  <section id="contact">
    <h2>Contact & Links</h2>
    <ul>
      <li><a href="https://github.com/garretleotta/">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/garret-leotta/">LinkedIn</a></li>
    </ul>
  </section>

  <footer>
    <p>&copy; {new Date().getFullYear()} Garret Leotta</p>
  </footer>
</div>
  );
}