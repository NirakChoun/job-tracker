import React from "react";
import Company from "./Company";
import { useState, useEffect } from "react";

const CompaniesTable = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const apiUrl = "/api/companies";
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCompanies(data);
      } catch (e) {
        console.log("Error fetching data: ", e);
      }
    };
    fetchCompanies();
  }, []);
  return (
    <section id="companies" className="mb-10">
      <div className="container mx-auto max-w-7xl px-4 xl:px-0">
        <table className="table-fixed h-full w-full text-left">
          <thead className="bg-active">
            <tr>
              <th className="p-4 border-black border-1 text-sm w-1/3 xl:w-1/5">
                Company Name
              </th>
              <th className="p-4 border-black border-1 text-sm w-1/3 xl:w-1/5">
                Location
              </th>
              <th className="p-4 border-black border-1 text-sm w-1/3 xl:w-1/5 xl:table-cell">
                Email
              </th>
              <th className="p-4 border-black border-1 text-sm w-1/5 hidden xl:table-cell">
                Website
              </th>
              <th className="p-4 border-black border-1 text-sm w-1/5 hidden xl:table-cell">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <Company key={company.id} company={company} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CompaniesTable;
