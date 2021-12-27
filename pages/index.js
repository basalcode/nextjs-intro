import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <style jsx>{`
        a {
          color: blue;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </div>
  );
}