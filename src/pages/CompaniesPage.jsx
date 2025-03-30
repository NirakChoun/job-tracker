import React from "react";
import AddBtn from "../components/AddBtn";
import AddCompanyForm from "../components/AddCompanyForm";
import CompaniesTable from "../components/CompaniesTable";
import { useState } from "react";

const CompaniesPage = ({ addCompanySubmit }) => {
  const [showForm, setShowForm] = useState(false);

  // Control the form's state in the parent container
  const toggleForm = () => setShowForm((prev) => !prev);
  const closeForm = () => setShowForm(false); // For cancel button

  return (
    <>
      <AddBtn text="Add a New Company" onClick={toggleForm} />
      <AddCompanyForm
        visible={showForm}
        onClose={closeForm}
        addCompanySubmit={addCompanySubmit}
      />
      <CompaniesTable />
    </>
  );
};

export default CompaniesPage;
