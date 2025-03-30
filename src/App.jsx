import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import ContactsPage from "./pages/ContactsPage";
import ContactPage, { contactLoader } from "./pages/ContactPage";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyPage, { companyLoader } from "./pages/CompanyPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const addContact = async (newContact) => {
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    });
    return;
  };

  const updateContact = async (contact) => {
    const res = await fetch(`/api/contacts/${contact.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    return;
  };

  const deleteContact = async (id) => {
    const res = await fetch(`/api/contacts/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const addCompany = async (newCompany) => {
    const res = await fetch(`/api/companies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    return;
  };

  const updateCompany = async (company) => {
    const res = await fetch(`/api/companies/${company.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(company),
    });
    return;
  };

  const deleteCompany = async (id) => {
    const res = await fetch(`/api/companies/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<JobsPage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={
            <JobPage updateJobSubmit={updateJob} deleteJob={deleteJob} />
          }
          loader={jobLoader}
        />
        <Route
          path="/contacts"
          element={<ContactsPage addContactSubmit={addContact} />}
        />
        <Route
          path="/contacts/:id"
          element={
            <ContactPage
              updateContactSubmit={updateContact}
              deleteContact={deleteContact}
            />
          }
          loader={contactLoader}
        />
        <Route
          path="/companies"
          element={<CompaniesPage addCompanySubmit={addCompany} />}
        />
        <Route
          path="/companies/:id"
          element={
            <CompanyPage
              updateCompanySubmit={updateCompany}
              deleteCompany={deleteCompany}
            />
          }
          loader={companyLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
