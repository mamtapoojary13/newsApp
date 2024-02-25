import { useState } from "react";

function Date() {
  let [date, setDate] = useState();
  console.log(date);
  return (
    <div>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
  );
}
export default Date;
