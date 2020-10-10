import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Particles from 'react-particles-js';

function Home() {
  return (
    <div className="App">
      <div>
          <div className="pad">
          <h1>EPSILON SOLUTIONS USA SERVICES</h1>
              <p>Backed by a team of experienced professionals, our strategic services meet the needs of all types and sizes of clients - from small startups to large firms - and deliver lasting changes with measurable growth. Please get in touch with us today to learn how Epsilon Solutions USA can help your future success.</p>
          <Particles className="part"
        params={{ 
          particles: { 
            number: { 
              value: 100, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          }, 
        }} 
      />   
          </div>
          <div className="mad">
          <div>
             <h2>Project</h2>
             <ul>
                 <li>WEB DEVELOPMENT & DESIGN</li>
                 <p>Looking to develop your business but not sure where to turn? Need help planning or executing your next project? Let us guide you. Any organization can move forward with small incremental changes, but building for the future in today’s rapidly evolving environment means taking bold chances and making insightful decisions.</p>
                 <li>WEBSITE MONITORING</li>
                 <p>We examine what organizations are doing to stay relevant and competitive in this fast-paced world, and which ones are doing it best. We then strategize using smart tools and global resources in order to understand the implications of every choice our clients can make. Get in touch to learn more about how this service can help you.</p>
             </ul>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Home;