import React from "react";

import "@/styles/globals.css";

const App = () => {
  return (
    <div className="h-[200px] w-[200px] flex flex-col before:justify-center items-center">
      <h1 className="font-sans text-bold text-2xl">Noobs</h1>
      <a
        className="underline text-sm font-sans text-blue-500"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      >
        Click me!
      </a>
    </div>
  );
};

export default App;
