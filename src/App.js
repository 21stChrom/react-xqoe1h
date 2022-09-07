import React from "react";

import "./style.css";
const audio = new Audio(this.url);  audio.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);
audio.loop = true;
audio.play().then(()=>{});
export default function App() {
  return (
    <div class="container">
      <h1>AppForTyson</h1>
      <audio controls loop >
        <source src="https://cdn.jsdelivr.net/gh/21stChrom/practice-projects@main/src/Juice%20WRLD%20-%20I%20Hate%20Wasting%20Time%20%20%20(Unreleased)%20[prod.%20dfk]%20[720p].mp3" type="audio/mpeg " />
        </audio><audio controls loop>
        <source src="https://cdn.jsdelivr.net/gh/21stChrom/react-xqoe1h@main/src/Juice%20WRLD%20-%20Traumatized%20(%20Lyrics%20)%20[%20Unreleased%20]%20[%20Prod.%20by%20RockyRoadz%20]%20__%20Vibe%20Alone%20[720p].mp3" type="audio/mpeg" data-track-number="2"/>
      </audio>
      <div>
        <iframe className="gunit" src="https://react-at9jyv.stackblitz.io/"></iframe>
      </div>
      <p><span style={{fontWeight: 'bold'}}>{Date()}</span></p>
    </div>
  );
}
