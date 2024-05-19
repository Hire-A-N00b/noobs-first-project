import React from 'react';

import '@/styles/globals.css';

const App = () => {
  return (
    <div className="flex size-[200px] flex-col items-center before:justify-center">
      <h1 className="text-bold font-sans text-2xl">Noobs</h1>
      <a className="font-sans text-sm text-blue-500 underline" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Click me!
      </a>
    </div>
  );
};

export default App;
