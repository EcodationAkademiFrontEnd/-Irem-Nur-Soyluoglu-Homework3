import React from "react";

const Userform = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Userform;
