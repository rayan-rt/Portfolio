import React from "react";

const Footer = () => {
  return (
    <div className="mt-2 py-6 text-center">
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Rayan. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
