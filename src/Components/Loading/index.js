import React from "react";
import "./style.css";

const Loading = () => {
  return (
    <main class="content my-container top-margin split-content center-loading">
      <div class="d-flex justify-content-center align-items-center loading">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </main>
  );
};

export default Loading;
