import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx

import Booklist from './Booklist'

const favoriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
]



export default function App() {
  return (
    <div>
      <Booklist books={ favoriteBooks} />
    </div>
  );
};

