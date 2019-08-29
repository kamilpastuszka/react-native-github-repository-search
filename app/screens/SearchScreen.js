import React from 'react';

import SearchComponent from '../components/SearchComponent';

export default function SearchScreen(props) {
  const onPressed = input => {
    console.log('user input:', input);
  };

  return <SearchComponent pressed={onPressed} />;
}
