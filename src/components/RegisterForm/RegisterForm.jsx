import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegisterForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { registerUser } from "../../sevices/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import GoBackBtn from "../GoBackBtn/GoBackBtn";
const initialValues = {
  fullname: "",
  email: "",
  birthday: "",
  source: "",
};
const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required("Required"),
  email: Yup.string()
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
    .required("Required"),
  birthday: Yup.string().required("Required"),
  source: Yup.string().required("Required"),
});

const RegisterForm = () => {
  const nameId = useId();
  const emailId = useId();
  const birthdayId = useId();
  const socialId = useId();
  const friendsId = useId();
  const myselfId = useId();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const data = await registerUser(id, values);
      if (data?.fullname) {
        toast.success(
          `${data?.fullname},you have successfully registered for the event`
        );
      }
    } catch (error) {
      toast.error("Something went wrong.... Try again later");
    }

    resetForm();
    navigate("/");
  };
  return (
    <>
      <GoBackBtn />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor={nameId} className={css.label}>
            Full name
          </label>
          <Field
            id={nameId}
            name="fullname"
            placeholder="Jane Doe"
            className={css.input}
          />
          <ErrorMessage name="fullname" component="p" className={css.error} />
          <label htmlFor={emailId} className={css.label}>
            Email
          </label>
          <Field
            id={emailId}
            name="email"
            placeholder="jane@acme.com"
            type="email"
            className={css.input}
          />
          <ErrorMessage name="email" component="p" className={css.error} />
          <label htmlFor={birthdayId} className={css.label}>
            Date of birth
          </label>
          <Field
            id={birthdayId}
            name="birthday"
            placeholder="15.05.2024"
            className={css.input}
          />
          <ErrorMessage name="birthday" component="p" className={css.error} />

          <label className={css.label}>
            How did you hear about this event?
          </label>
          <div className={css.radiowrap}>
            <label htmlFor={socialId} className={css.radiolabel}>
              Social Media
            </label>

            <Field
              id={socialId}
              name="source"
              type="radio"
              value="social-media"
              className={css.radioinput}
            />

            <label htmlFor={friendsId} className={css.radiolabel}>
              Friends
            </label>
            <Field
              id={friendsId}
              name="source"
              type="radio"
              value="friends"
              className={css.radioinput}
            />

            <label htmlFor={myselfId} className={css.radiolabel}>
              Found myself
            </label>
            <Field
              id={myselfId}
              name="source"
              type="radio"
              value="found myself"
              className={css.radioinput}
            />
            <ErrorMessage name="source" component="p" className={css.error} />
          </div>

          <button type="submit" className={css.btn}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
