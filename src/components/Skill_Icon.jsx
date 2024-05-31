import React from "react";
import { FaHtml5 } from "react-icons/fa";

const Skill_Icon = ({ Icon }) => {
  return (
    <div className="relative aspect-square bg-slate-600">
      <Icon className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default Skill_Icon;
