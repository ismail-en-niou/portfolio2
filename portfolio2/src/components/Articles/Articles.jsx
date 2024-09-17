import React, { useEffect } from 'react';

function Articles() {
  useEffect(() => {
    window.location.href = 'https://ismail-it.blogspot.com/';
  }, []);

  return null; 
}

export default Articles;
