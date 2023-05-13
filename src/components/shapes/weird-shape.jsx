import React from "react";

const WeirdShape = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="114"
      height="114"
      fill="none"
      viewBox="0 0 114 114"
    >
      <mask id="path-1-inside-1_4_64" fill="#fff">
        <path
          fillRule="evenodd"
          d="M57.5 0H114v84.75H57.5V56.5h28.25V28.25H57.5V0z"
          clipRule="evenodd"
        ></path>
      </mask>
      <path
        fill="#F7E19F"
        d="M57.5 0v-1h-1v1h1zM114 0h1v-1h-1v1zm0 84.75v1h1v-1h-1zm-56.5 0h-1v1h1v-1zm0-28.25v-1h-1v1h1zm28.25 0v1h1v-1h-1zm0-28.25h1v-1h-1v1zm-28.25 0h-1v1h1v-1zM85.75-1H57.5v2h28.25v-2zM114-1H85.75v2H114v-2zm1 29.25V0h-2v28.25h2zm0 28.25V28.25h-2V56.5h2zm0 28.25V56.5h-2v28.25h2zm-29.25 1H114v-2H85.75v2zm0-2H57.5v2h28.25v-2zm-27.25 1V56.5h-2v28.25h2zm-1-27.25h28.25v-2H57.5v2zm27.25-29.25V56.5h2V28.25h-2zm-27.25 1h28.25v-2H57.5v2zM56.5 0v28.25h2V0h-2z"
        mask="url(#path-1-inside-1_4_64)"
      ></path>
      <mask
        id="path-3-outside-2_4_64"
        width="59"
        height="87"
        x="0"
        y="27.25"
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M0 27.25H59V114.25H0z"></path>
        <path
          fillRule="evenodd"
          d="M1 28.25h56.5V56.5H29.25v28.25H57.5V113H1V28.25z"
          clipRule="evenodd"
        ></path>
      </mask>
      <path
        fill="#F7E19F"
        d="M1 28.25v-1H0v1h1zm56.5 0h1v-1h-1v1zm0 28.25v1h1v-1h-1zm-28.25 0v-1h-1v1h1zm0 28.25h-1v1h1v-1zm28.25 0h1v-1h-1v1zm0 28.25v1h1v-1h-1zM1 113H0v1h1v-1zm28.25-85.75H1v2h28.25v-2zm28.25 0H29.25v2H57.5v-2zm1 29.25V28.25h-2V56.5h2zm-29.25 1H57.5v-2H29.25v2zm1 27.25V56.5h-2v28.25h2zm-1 1H57.5v-2H29.25v2zm27.25-1V113h2V84.75h-2zm1 27.25H29.25v2H57.5v-2zM1 114h28.25v-2H1v2zM0 84.75V113h2V84.75H0zM0 56.5v28.25h2V56.5H0zm0-28.25V56.5h2V28.25H0z"
        mask="url(#path-3-outside-2_4_64)"
      ></path>
    </svg>
  );
};

export default WeirdShape;
