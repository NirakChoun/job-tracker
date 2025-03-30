import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import editBtnImg from "../assets/images/edit.svg";
import deleteBtnImg from "../assets/images/delete.svg";
import locationImg from "../assets/images/location.svg";
import emailImg from "../assets/images/email.svg";
import phoneImg from "../assets/images/phone.svg";
import websiteImg from "../assets/images/website.svg";
import EditCompanyForm from "../components/EditCompanyForm";
import { toast } from "react-toastify";

const Company = ({ updateCompanySubmit, deleteCompany }) => {
  const company = useLoaderData();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);
  const closeForm = () => setShowForm(false); // For cancel button

  const onDeleteClick = (companyId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this company?"
    );

    if (!confirm) return;

    deleteCompany(companyId);

    toast.success("Company deleted successfully");

    navigate("/companies");
  };

  return (
    <>
      <section id="company">
        <div className="container mx-auto px-4 xl:px-0 max-w-7xl py-8">
          <div className="flex flex-col xl:flex-row justify-between">
            <h2 className="text-3xl">{company.name}</h2>

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
                onClick={() => onDeleteClick(company.id)}
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
            <div className="company flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={locationImg} alt="" />
              <p className="text-lg font-semibold">{company.location}</p>
            </div>

            <div className="email flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={emailImg} alt="" />
              <p className="text-lg font-semibold">{company.email}</p>
            </div>

            <div className="company flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={websiteImg} alt="" />
              <p className="text-lg font-semibold">{company.website}</p>
            </div>

            <div className="phone flex items-center space-x-4 mb-4">
              <img className="max-w-full w-6 h-6" src={phoneImg} alt="" />
              <p className="text-lg font-semibold">{company.phone}</p>
            </div>
          </div>
        </div>
      </section>
      <EditCompanyForm
        visible={showForm}
        onClose={closeForm}
        updateCompanySubmit={updateCompanySubmit}
      />
    </>
  );
};

const companyLoader = async ({ params }) => {
  const res = await fetch(`/api/companies/${params.id}`);

  const data = await res.json();
  return data;
};

export { Company as default, companyLoader };
