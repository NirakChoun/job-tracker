import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({ contact }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contacts/${contact.id}`);
  };

  return (
    // Add onClick event to navigate to the job's page
    <tr onClick={handleClick} className="hover:bg-indigo-100 cursor-pointer">
      <td
        className="p-4 border-black border-1 truncate text-sm"
        title="Software Engineer Intern"
      >
        {contact.firstName}
      </td>
      <td
        className="p-4 border-black border-1 truncate text-sm"
        title="Software Engineer Intern"
      >
        {contact.lastName}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm">
        {contact.company}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm hidden xl:table-cell">
        {contact.email}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm hidden xl:table-cell">
        {contact.phone}
      </td>
    </tr>
  );
};

export default Contact;
