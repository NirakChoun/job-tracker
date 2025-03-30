import React from "react";
import { useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditContactForm = ({ visible, onClose, updateContactSubmit }) => {
  const contact = useLoaderData();
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [company, setCompany] = useState(contact.company);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedContact = {
      id,
      firstName,
      lastName,
      company,
      email,
      phone,
    };

    updateContactSubmit(updatedContact);

    toast.success("Contact Updated Successfully");

    navigate(`/contacts/${contact.id}`);
  };

  return (
    <div
      id="addContactForm"
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 xl:px-0 bg-opacity-30 transition-opacity duration-300 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <form
        onSubmit={submitForm}
        className={`bg-white p-6 rounded-md shadow-xl w-full max-w-md border-black border transform transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Form Title */}
        <div className="mb-4">
          <h2 className="font-semibold text-center text-2xl xl:text-3xl">
            Update Contact
          </h2>
        </div>
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1 font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1 font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {/* Company */}
        <div className="mb-4">
          <label htmlFor="company" className="block mb-1 font-medium">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            type="button"
            className="bg-red-600 text-black px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;
