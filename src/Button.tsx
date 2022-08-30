import React, { FC } from "react";

type ButtonProps = {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <div>
      <button
        className="rounded-xl bg-indigo-600 px-6 text-white py-2  hover:bg-indigo-400"
        onClick={props.onClick}
      >
        {props.children}{" "}
      </button>
    </div>
  );
};

export default Button;
