import axios from "axios";
import React, { useEffect } from "react";

export const Axios = () => {
  /* Not understood: i cant get the freaking payload from here with body. Instead used data*/
  useEffect(() => {
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users",
      headers: {Authorization: 'Str'},
      data: { name: "Alisa Axios" }, // no need for JSON.stringify
      timeout: 2000,
    }).then((res) => {
      console.log(res.data, "axios");
    });
  }, []);

  /* Second syntax of axios similar to fetch */
  /* in this syntax, you can get payload while posting. everything in second param obj  */

  // axios
  //   .post("https://jsonplaceholder.typicode.com/users", {
  //     // headers: { Authorization: "Str" },
  //     body: { name: "HI AXIOS" }, // no need for JSON.stringify
  //     timeout: 2000,
  //   })
  //   .then((res) => {
  //     console.log(res, "axios");
  //   });

  return (
    <div style={{ flex: 1 }}>
      <h1>Axios</h1>
    </div>
  );
};
