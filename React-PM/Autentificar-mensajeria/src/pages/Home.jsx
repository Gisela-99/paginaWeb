import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
   <>
    <h1>Mensajeria</h1>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/task'>Tarea</Link></li>
      </ul>
    </nav>
   </>
  );
}


