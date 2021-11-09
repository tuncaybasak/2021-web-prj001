import * as React from 'react';
import { useState } from 'react';

export const MyStateCmp001 = () => {
  const [greeting, setGreeting] = useState('Hello State Cmp 1');

  const handleChange = event => setGreeting(event.target.value);

  return (
    <div>
      <h3>{greeting}</h3>
      <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      />
      &nbsp;&nbsp;&nbsp;
      <input type="text" value={greeting} onChange={handleChange} />
    </div>
  );
};
