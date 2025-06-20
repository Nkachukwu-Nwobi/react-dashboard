import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

function Form() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const intitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });
  return (
    <main>
      <Header title="CREATE USER" subtitle="Create a new user profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={intitialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} action="" className=" w-[94%] mx-auto">
            <section className={`grid gap-4 grid-cols-4 `}>
              <div
                className={`flex flex-col gap-2 ${
                  isNonMobile ? "col-span-2" : "col-span-4"
                }`}
              >
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  className={`bg-red-300 rounded-[20px] `}
                  type="text"
                  name="firstName"
                  aria-label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName && errors.firstName}
              </div>

              <div
                className={`flex flex-col gap-2 ${
                  isNonMobile ? "col-span-2" : "col-span-4"
                }`}
              >
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  className={`bg-red-300 rounded-[20px]`}
                  type="text"
                  name="lastName"
                  aria-label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName && errors.lastName}
              </div>

              <div
                className={`flex flex-col gap-2 col-span-4`}
              >
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className={`bg-red-300 rounded-[20px]`}
                  type="text"
                  name="email"
                  aria-label="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>

              <div
                className={`flex flex-col gap-2 col-span-4`}
              >
                <label htmlFor="contact">Contact</label>
                <input
                  id="contact"
                  className={`bg-red-300 rounded-[20px]`}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" //research more on patterns for validation
                  name="contact"
                  aria-label="contact"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                />
                {errors.contact && touched.contact && errors.contact}
              </div>

              <div
                className={`flex flex-col gap-2 col-span-4`}
              >
                <label htmlFor="address1">Address1</label>
                <input
                  id="address1"
                  className={`bg-red-300 rounded-[20px]`}
                  type="text"
                  name="address1"
                  aria-label="address1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                />
                {errors.address1 && touched.address1 && errors.address1}
              </div>

              <div
                className={`flex flex-col gap-2 col-span-4`}
              >
                <label htmlFor="address2">Address2</label>
                <input
                  id="address2"
                  className={`bg-red-300 rounded-[20px]`}
                  type="text"
                  name="address2"
                  aria-label="address2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                />
                {errors.address2 && touched.address2 && errors.address2}
              </div>
            </section>

            <div className=" w-full flex justify-end items-center mt-8">
                <button className=" bg-blue-300 px-4 py-2 hover:cursor-pointer"  type="submit">Create new user</button>
              </div>
          </form>
        )}
      </Formik>
    </main>
  );
}

export default Form;
