import React from "react";
import AddBtn from "../components/AddBtn";
import AddContactForm from "../components/AddContactForm";
import ContactsTable from "../components/ContactsTable";
import { useState } from "react";

const ContactPage = ({ addContactSubmit }) => {
  const [showForm, setShowForm] = useState(false);

  // Control the form's state in the parent container
  const toggleForm = () => setShowForm((prev) => !prev);
  const closeForm = () => setShowForm(false); // For cancel button

  return (
    <>
      <AddBtn text="Add a New Contact" onClick={toggleForm} />
      <AddContactForm
        visible={showForm}
        onClose={closeForm}
        addContactSubmit={addContactSubmit}
      />
      <ContactsTable />
    </>
  );
};

export default ContactPage;
