import React, { ChangeEventHandler, FC } from "react";

type ProfileInputProps = {
  Status?: string;
  about: string;
  placeholder: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const ProfileInput: FC<ProfileInputProps> = ({
  Status,
  about,
  placeholder,
  value,
  onChange,
}) => {
  let important = "hidden";
  let mark = "*";

  if (status === "UR") {
    important = "block";
  }
  if (status === "skip") {
    important = "block";
    mark = "(Skip only if you dont't have it official documents)";
  }

  return (
    <div className="flex items-center p-5 border-y justify-between">
      <div className="flex">
        <p className="text-gray-600 shrink-0">{about}</p>
        <span className={"text-red-700 " + important}>{mark}</span>
      </div>
      <input
        className="p-2 w-2/3 bg-gray-50 text-gray-800 border rounded-md shrink-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ProfileInput;
