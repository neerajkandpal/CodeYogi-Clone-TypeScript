import React from "react";
import ProfileInput from "./ProfileInput";
const Profile = () => {
  return (
    <div className="bg-white h-full rounded-md p-3">
      <h3 className="text-lg font-medium text-black pb-3">Profile Details </h3>
      <div>
        <ProfileInput
          placeholder="First Name"
          about="First Name"
          Status="UR"
          value={"Neeraj"}
        ></ProfileInput>
        <ProfileInput
          placeholder="Last Name"
          about="Last Name"
          Status="skip"
          value={"Kandpal"}
        ></ProfileInput>
        <ProfileInput
          placeholder="Email address"
          about="Email address"
          Status="UR"
          value={""}
        ></ProfileInput>
        <ProfileInput
          placeholder="Institute Name"
          about="Institute Name"
          Status="UR"
          value={"GOVT ITI Haldwani"}
        ></ProfileInput>
        <ProfileInput
          placeholder="Year Of Passed"
          about="Year Of Passed"
          Status="UR"
          value={"2020"}
        ></ProfileInput>
        <ProfileInput
          placeholder="Phone Number"
          about="Phone Number"
          Status="UR"
          value={"+91 9760553227"}
        ></ProfileInput>
        <ProfileInput
          placeholder="Date Of Birth"
          about="Date Of Birth"
          Status="UR"
          value={"15/04/2001"}
        ></ProfileInput>
        <ProfileInput
          placeholder="Device you are using to do your assignment"
          about="Device you are using to do your assignment"
          Status=""
          value={"Laptop"}
        ></ProfileInput>
        <ProfileInput
          placeholder="Institute Roll Number"
          about="Institute Roll Number"
          Status="UR"
          value={"R180805004366"}
        ></ProfileInput>
        <ProfileInput
          placeholder="Branch"
          about="Branch"
          Status="UR"
          value={"Fitter"}
        ></ProfileInput>
      </div>
    </div>
  );
};

export default Profile;
