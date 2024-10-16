import React, { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "What you Love!" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passion" }
  ];

  const [heroCount, setHeroCount] = useState(0);

  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  );
}

export default App;
