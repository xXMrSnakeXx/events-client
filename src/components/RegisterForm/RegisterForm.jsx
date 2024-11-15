import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { registerUser } from "../../sevices/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import GoBackBtn from "../GoBackBtn/GoBackBtn";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

const initialValues = {
  fullname: "",
  email: "",
  birthday: null,
  source: "",
};
const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required("Required"),
  email: Yup.string()
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
    .required("Required"),
  birthday: Yup.date().required("Required"),
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
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const data = await registerUser(id, values);
      if (data?.fullname) {
        toast.success(
          `${data?.fullname},you have successfully registered for the event`
        );
      }
    } catch (error) {
      toast.error("Something went wrong.... Try again later");
    } finally {
      resetForm();
      setSubmitting(false);
      navigate("/");
    }
  };

  return (
    <>
      <GoBackBtn />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form
            className="
          flex
          flex-col
          justify-center
          items-center
          w-[800px]
          m-auto
          p-[25px]
          bg-gray
          border-4
          border-solid
          border-primary
          rounded-2xl
          shadow-custom-primary
          overflow-hidden
          "
          >
            <label
              htmlFor={nameId}
              className="
            text-[20px]
            text-white
            mb-3
            "
            >
              Full name
            </label>
            <Field
              id={nameId}
              name="fullname"
              placeholder="Jane Doe"
              className="
              w-[450px]
              h-[30px]
              mb-3
              bg-transparent
              rounded-xl
              p-[10px]
              text-[16px]
              outline-none
              tracking-wide
              font-normal
              transition-all
              duration-500
              ease-cubicBezier
              text-white
              cursor-pointer
              placeholder-opacity-30
              placeholder-light
              hover:scale-105
              hover:shadow-custom-primary
              focus:scale-105
              focus:shadow-custom-primary
              border
              border-solid
              border-primary"
            />
            <ErrorMessage
              name="fullname"
              component="p"
              className="text-[10px] text-error"
            />
            <label
              htmlFor={emailId}
              className="
            text-[20px]
            text-white
            mb-3
            "
            >
              Email
            </label>
            <Field
              id={emailId}
              name="email"
              placeholder="jane@acme.com"
              type="email"
              className="
              w-[450px]
              h-[30px]
              mb-3
              bg-transparent
              rounded-xl
              p-[10px]
              text-[16px]
              outline-none
              tracking-wide
              font-normal
              transition-all
              duration-500
              ease-cubicBezier
              text-white
              cursor-pointer
              placeholder-opacity-30
              placeholder-light
              hover:scale-105
              hover:shadow-custom-primary
              focus:scale-105
              focus:shadow-custom-primary
              border
              border-solid
              border-primary"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-[10px] text-error"
            />
            <label
              htmlFor={birthdayId}
              className="
            text-[20px]
            text-white
            mb-3
            "
            >
              Date of birth
            </label>
            <CustomDatePicker
              values={values}
              setFieldValue={setFieldValue}
              cssInput="
              w-[450px]
              h-[30px]
              mb-3
              bg-transparent
              rounded-xl
              p-[10px]
              text-[16px]
              outline-none
              tracking-wide
              font-normal
              transition-all
              duration-500
              ease-cubicBezier
              text-white
              cursor-pointer
              placeholder-opacity-30
              placeholder-light
              hover:scale-105
              hover:shadow-custom-primary
              focus:scale-105
              focus:shadow-custom-primary
              border
              border-solid
              border-primary"
            />

            <ErrorMessage
              name="birthday"
              component="p"
              className="text-[10px] text-error"
            />

            <label
              className="
            text-[20px]
            text-white
            mb-3
            "
            >
              How did you hear about this event?
            </label>
            <div className="w-[450px] flex items-center justify-between mt-[25px]">
              <label htmlFor={socialId} className="text-light text-[16px]">
                Social Media
              </label>

              <Field
                id={socialId}
                name="source"
                type="radio"
                value="social-media"
                className="w-5 h-5 cursor-pointer"
              />

              <label htmlFor={friendsId} className="text-light text-[16px]">
                Friends
              </label>
              <Field
                id={friendsId}
                name="source"
                type="radio"
                value="friends"
                className="w-5 h-5 cursor-pointer"
              />

              <label htmlFor={myselfId} className="text-light text-[16px]">
                Found myself
              </label>
              <Field
                id={myselfId}
                name="source"
                type="radio"
                value="found myself"
                className="w-5 h-5 cursor-pointer"
              />
              <ErrorMessage
                name="source"
                component="p"
                className="text-[10px] text-error"
              />
            </div>

            <button
              type="submit"
              className="
            flex
            justify-center
            items-center
            w-[100px]
            h-[50px]
            border-none
            rounded-xl
            bg-accent
            mt-10
            text-white
            text-[20px]
            transition-all
            duration-300
            ease-cubicBezier
            hover:scale-105
            hover:shadow-custom-primary
            focus:scale-105
            focus:shadow-custom-primary
						"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading.." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
