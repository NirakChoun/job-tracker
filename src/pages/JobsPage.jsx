import React from "react";
import AddBtn from "../components/AddBtn";
import AddJobForm from "../components/AddJobForm";
import JobsTable from "../components/JobsTable";
import { useState } from "react";

const JobsPage = ({ addJobSubmit }) => {
  const [showForm, setShowForm] = useState(false);

  // Control the form's state in the parent container
  const toggleForm = () => setShowForm((prev) => !prev);
  const closeForm = () => setShowForm(false); // For cancel button

  return (
    <>
      <AddBtn text="Add a New Job" onClick={toggleForm} />
      <AddJobForm
        visible={showForm}
        onClose={closeForm}
        addJobSubmit={addJobSubmit}
      />
      <JobsTable />
    </>
  );
};

export default JobsPage;
