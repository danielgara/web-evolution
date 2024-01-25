import React from "react";
import './blog.min.css'

export default function Layout({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  )
}