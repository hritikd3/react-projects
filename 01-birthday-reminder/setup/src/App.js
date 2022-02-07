import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [friends, setFriends] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{friends.length} birthdays today</h3>
        <List friends={friends} />
        <button onClick={() => setFriends([])} >clear all</button>
        {/* console.log("click is wrking") */}
      </section>
    </main>
  );
}

export default App;
