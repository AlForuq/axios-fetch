import React, { useEffect } from "react";
import { Fetch } from "./components/fetch";
import { Axios } from "./components/axios";
import axios from "axios";

const App = () => {
  // axios.interceptors.request.use((request) => {
  //   // console.log(request, "request");
  //   // request.headers.Authorization = "Bearer Web";
  //   return request;
  // });

  // axios.interceptors.response.use((response) => {
  //   // console.log(response, "resonse");
  //   return response;
  // });
  return (
    <div style={{ display: "flex" }}>
      <Fetch />
      <Axios />
    </div>
  );
};

export default App;
