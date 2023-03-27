import React from 'react';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to our page !</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec eu nunc nec quam commodo consequat.
        Sed elit velit, porta in laoreet et, porttitor eget justo. Phasellus a mauris ac arcu auctor
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec eu nunc nec quam commodo consequat.
        Sed elit velit, porta in laoreet et, porttitor eget justo. Phasellus a mauris ac arcu aucto.
      </p>
    </div>
  );
}

export default Home;
