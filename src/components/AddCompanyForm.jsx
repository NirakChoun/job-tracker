import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCompanyForm = ({ visible, onClose, addCompanySubmit }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newCompany = {
      name,
      location,
      email,
      website,
      phone,
    };

    addCompanySubmit(newCompany);

    toast.success("Company Added Successfully");

    navigate("/companies");
  };

  return (
    <div
      id="addJobForm"
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
            New Contact
          </h2>
        </div>
        {/* Company Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-medium">
            Company Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block mb-1 font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Website */}
        <div className="mb-4">
          <label htmlFor="website" className="block mb-1 font-medium">
            Website
          </label>
          <input
            type="website"
            id="website"
            name="website"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
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
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCompanyForm;
