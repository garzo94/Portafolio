import React from "react";
import "../App.css";
export default function Loading() {
  return (
    <div className="center">
      <div className="ring"></div>
      <span className="loading">loading...</span>
    </div>
  );
}
