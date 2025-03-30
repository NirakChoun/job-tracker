import React from "react";
import { useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditJobForm = ({ visible, onClose, updateJobSubmit }) => {
  const job = useLoaderData();
  const [title, setTitle] = useState(job.title);
  const [position, setPosition] = useState(job.position);
  const [company, setCompany] = useState(job.company);
  const [location, setLocation] = useState(job.location);
  const [status, setStatus] = useState(job.status);
  const [dateApplied, setDateApplied] = useState(job.dateApplied);
  const [deadline, setDeadline] = useState(job.deadline);
  const [description, setDescription] = useState(job.description);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      position,
      company,
      location,
      status,
      dateApplied,
      deadline,
      description,
    };

    updateJobSubmit(updatedJob);

    toast.success("Job Updated Successfully");

    navigate(`/jobs/${job.id}`);
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
            Update Job
          </h2>
        </div>
        {/* Job Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Job Position */}
        <div className="mb-4">
          <label htmlFor="position" className="block mb-1 font-medium">
            Position
          </label>
          <select
            name="position"
            id="position"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="Internship">Internship</option>
            <option value="Full-Time Job">Full-Time Job</option>
            <option value="Part-Time Job">Part-Time Job</option>
          </select>
        </div>
        {/* Company Name */}
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
        {/* Company Location */}
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
        {/* Job Status */}
        <div className="mb-4">
          <label htmlFor="status" className="block mb-1 font-medium">
            Status
          </label>
          <select
            name="status"
            id="status"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Applying">Applying</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Accepted">Accepted</option>
            <option value="No Response">No Response</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        {/* Date Applied */}
        <div className="mb-4">
          <label htmlFor="date-applied" className="block mb-1 font-medium">
            Date Applied
          </label>
          <input
            type="date"
            id="date-applied"
            name="date-applied"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            value={dateApplied}
            onChange={(e) => setDateApplied(e.target.value)}
          />
        </div>
        {/* Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block mb-1 font-medium">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="border rounded w-full py-2 px-3"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
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

export default EditJobForm;
