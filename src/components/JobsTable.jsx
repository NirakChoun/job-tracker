import React from "react";
import { useState, useEffect } from "react";
import Job from "./Job";

const JobsTable = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = "/api/jobs";
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (e) {
        console.log("Error fetching data: ", e);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section id="jobs" class="mb-10">
      <div class="container mx-auto max-w-7xl px-4 xl:px-0">
        <table class="table-fixed h-full w-full text-left">
          <thead class="bg-active">
            <tr>
              <th class="p-4 border-black border-1 text-sm w-1/3 xl:w-2/8">
                Title
              </th>
              <th class="p-4 border-black border-1 text-sm w-1/3 xl:w-1/8">
                Position
              </th>
              <th class="p-4 border-black border-1 text-sm w-1/3 xl:w-2/8 xl:table-cell">
                Company
              </th>
              <th class="p-4 border-black border-1 text-sm w-2/8 hidden xl:table-cell">
                Location
              </th>
              <th class="p-4 border-black border-1 text-sm w-1/8 hidden xl:table-cell">
                Status
              </th>
              <th class="p-4 border-black border-1 text-sm w-1/8 hidden xl:table-cell">
                Date Applied
              </th>
              <th class="p-4 border-black border-1 text-sm w-1/8 hidden xl:table-cell">
                Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default JobsTable;
