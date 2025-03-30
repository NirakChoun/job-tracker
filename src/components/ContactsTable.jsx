import React from "react";
import Contact from "./Contact";
import { useState, useEffect } from "react";

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const apiUrl = "/api/contacts";
        const res = await fetch(apiUrl);
        const data = await res.json();
        setContacts(data);
      } catch (e) {
        console.log("Error fetching data: ", e);
      }
    };
    fetchContacts();
  }, []);
  return (
    <section id="contacts" className="mb-10">
      <div className="container mx-auto max-w-7xl px-4 xl:px-0">
        <table className="table-fixed h-full w-full text-left">
          <thead className="bg-active">
            <tr>
              <th className="p-4 border-black border-1 text-sm w-1/3 xl:w-1/5">
                First Name
              </th>
              <th className="p-4 border-black border-1 text-sm w-1/3 xl:w-1/5">
                Last Name
              </th>
              <th className="p-4 border-black border-1 text-sm w-1/3 xl:w-1/5 xl:table-cell">
                Company
              </th>
              <th className="p-4 border-black border-1 text-sm w-1/5 hidden xl:table-cell">
                Email
              </th>
              <th className="p-4 border-black border-1 text-sm w-1/5 hidden xl:table-cell">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ContactsTable;
