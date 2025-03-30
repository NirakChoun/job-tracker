import React from "react";
import { useNavigate } from "react-router-dom";

const Company = ({ company }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/companies/${company.id}`);
  };

  return (
    // Add onClick event to navigate to the job's page
    <tr onClick={handleClick} className="hover:bg-indigo-100 cursor-pointer">
      <td className="p-4 border-black border-1 truncate text-sm">
        {company.name}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm">
        {company.location}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm">
        {company.email}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm hidden xl:table-cell">
        {company.website}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm hidden xl:table-cell">
        {company.phone}
      </td>
    </tr>
  );
};

export default Company;
