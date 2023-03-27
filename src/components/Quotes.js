import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './quotes.module.css';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const category = 'happiness';
  const apiKey = '3d8V6/tgQg33DNwFGRJhSQ==ag37Ez9EP2ZdaxPN';

  useEffect(() => {
    axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        const data = response.data[0];
        setQuote(data.quote);
        setAuthor(data.author);
        setLoading(false);
      })
      .catch(() => {
        setError('Error while displaying quotes');
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="state-display">Loading...</p>;
  }
  if (error) {
    return (
      <em className="state-display">
        {error}
        {' '}
        ... Please refresh the page.
      </em>
    );
  }

  return (
    <div className={styles.quotesBox}>
      <blockquote>
        { quote }
        <cite>
          -
          {' '}
          { author }
        </cite>
      </blockquote>
    </div>
  );
}

export default Quotes;
