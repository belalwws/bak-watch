import React from "react";
import Layout from "../Layout/Layout";
import { Input } from "../Components/UsedInputs";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 flex-colo gap-8 p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <h3 className=" font-bold text-subMain text-xl mb-8">BAK-WATCH </h3>
          <Input
            label="FullName"
            placeholder="bak-tech user name"
            type="name"
            bg={true}
          />
          <Input
            label="Email"
            placeholder="yourname@bakwatch.com"
            type="email"
            bg={true}
          />
          <Input
            label="Password"
            placeholder="******"
            type="Password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white  p-4 rounded-lg w-full"
          >
            <CiLogin /> Sign Up
          </Link>
          <p className="text-center text-border">
            Sign Up Already have an account?{" "}
          </p>
          <Link to="/login" className="text-dryGray font-semibold ml-2">
            Sign In
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
