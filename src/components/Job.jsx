import React from "react";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    // Add onClick event to navigate to the job's page
    <tr onClick={handleClick} className="hover:bg-indigo-100 cursor-pointer">
      <td
        className="p-4 border-black border-1 truncate text-sm"
        title="Software Engineer Intern"
      >
        {job.title}
      </td>
      <td
        className="p-4 border-black border-1 truncate text-sm"
        title="Software Engineer Intern"
      >
        {job.position}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm">
        {job.company}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm hidden xl:table-cell">
        {job.location}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm hidden xl:table-cell">
        {job.status}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm hidden xl:table-cell">
        {job.dateApplied}
      </td>
      <td className="p-4 border-black border-1 truncate text-sm hidden xl:table-cell">
        {job.deadline}
      </td>
    </tr>
  );
};

export default Job;
