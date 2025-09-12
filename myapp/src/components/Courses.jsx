import { useState } from "react";

function Courses() {
  return (
    <div>
     <ToggleMessageCard />
    </div>
  );
}

function ToggleMessageCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Message" : "Show Message"}
      </button>
      {isOpen && <p>Welcome to the Courses Page 🎉</p>}
    </div>
  );
}

export default Courses;