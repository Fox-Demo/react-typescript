import React from 'react';
import { Link } from "react-router-dom";
import { projectsRouters } from './router';
import './App.css';

function App() {
  return (
    <div className='homepage'>
      <header>
        <h1 className='homepage__header--welcome'>Welcome!</h1>
      </header>
      <section className='homepage__container'>
        <div>
          <main className='homepage__main'>
            <h1 className='homepage__main--title'>Rain Frontend Projects</h1>
            <div className='homepage__links'>
              {projectsRouters.map((project) => {
                return <Link className='homepage__link' to={project.path}>{project.title}</Link>
              })}
            </div>

          </main>
        </div>
      </section>
    </div>
  );
}

export default App;