"use client";
let apiurl;
if (typeof window !== "undefined") {
  apiurl = `${window.location.hostname}:1154`;
}

//FOR local
const frontend = "http://localhost:3000"
const backend = "http://localhost:5000"


export { apiurl, frontend, backend };
