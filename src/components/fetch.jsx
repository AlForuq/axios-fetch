import React, { useEffect } from "react";

export const Fetch = () => {
  useEffect(() => {
    let controller = new AbortController();
    setTimeout(() => {
      return controller.abort();
    }, 2000);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        // 'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('token')} `
      },
      /* not working if entered "body" with GET method
      because body will work with POST method */
      body: JSON.stringify({ name: "Alisa Fetch" }),
    })
      .then((res) => {
        // console.log(res, "fetch before json");
        return res.json();
      })
      .then((res) => {
        console.log(res, "fetch after json");
      });
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <h1>Fetch</h1>
    </div>
  );
};
