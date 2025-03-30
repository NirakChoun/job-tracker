import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import editBtnImg from "../assets/images/edit.svg";
import deleteBtnImg from "../assets/images/delete.svg";
import positionImg from "../assets/images/position.svg";
import companyImg from "../assets/images/company.svg";
import locationImg from "../assets/images/location.svg";
import statusImg from "../assets/images/status.svg";
import dateAppliedImg from "../assets/images/date-applied.svg";
import deadlineImg from "../assets/images/deadline.svg";
import descriptionImg from "../assets/images/description.svg";
import EditJobForm from "../components/EditJobForm";
import { toast } from "react-toastify";

const JobPage = ({ updateJobSubmit, deleteJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);
  const closeForm = () => setShowForm(false); // For cancel button

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");

    if (!confirm) return;

    deleteJob(jobId);

    toast.success("Job deleted successfully");

    navigate("/");
  };

  return (
    <>
      <section id="job">
        <div className="container mx-auto px-4 xl:px-0 max-w-7xl py-8">
          <div className="flex flex-col xl:flex-row justify-between">
            <h2 className="text-3xl">{job.title}</h2>

            <div className="flex space-x-4 py-4">
              <button
                onClick={toggleForm}
                className="bg-black flex items-center space-x-2 py-1 px-2 rounded-md"
              >
                <span>
                  <img src={editBtnImg} alt="Edit" className="w-6 h-6" />
                </span>
                <span className="text-white">Edit</span>
              </button>
              <button
                onClick={() => onDeleteClick(job.id)}
                className="bg-red-600 flex items-center space-x-2 py-1 px-2 rounded-md"
              >
                <span>
                  <img src={deleteBtnImg} alt="Delete" className="w-6 h-6" />
                </span>
                <span className="text-white">Delete</span>
              </button>
            </div>
          </div>

          <div className="information">
            <div className="position flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={positionImg} alt="" />
              <p className="text-lg font-semibold">{job.position}</p>
            </div>

            <div className="company flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={companyImg} alt="" />
              <p className="text-lg font-semibold">{job.company}</p>
            </div>

            <div className="location flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={locationImg} alt="" />
              <p className="text-lg font-semibold">{job.location}</p>
            </div>

            <div className="status flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={statusImg} alt="" />
              <p className="text-lg font-semibold">{job.status}</p>
            </div>

            <div className="date-applied flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={dateAppliedImg} alt="" />
              <p className="text-lg font-semibold">{job.dateApplied}</p>
            </div>

            <div className="deadline flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={deadlineImg} alt="" />
              <p className="text-lg font-semibold">{job.deadline}</p>
            </div>

            <div className="description mb-4">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-6 h-6"
                  src={descriptionImg}
                  alt="Description"
                />
                <h3 className="font-semibold text-lg">Job Description</h3>
              </div>
              <p className="text-md text-gray-800 leading-relaxed">
                {job.description?.trim() === ""
                  ? "No Description"
                  : job.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <EditJobForm
        visible={showForm}
        onClose={closeForm}
        updateJobSubmit={updateJobSubmit}
      />
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);

  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
