import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// eslint-disable-next-line react/prop-types
export default function MyProfile({ profileImage, setProfileImage }) {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the uploaded file
      setProfileImage(imageUrl); // Update the state in UserAccount
    }
  };

  const handleClickImage = () => {
    document.getElementById("image_file").click(); // Trigger file input click programmatically
  };

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, "Mobile Number must be numeric")
      .required("Mobile Number is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    bio: Yup.string(),
    preferences: Yup.string(),
    password: Yup.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    gender: Yup.string().required("Please select a gender"),
  });

  // Initial Form Values
  const initialValues = {
    fullName: "Sokreaksmey Deap",
    email: "sokreaksmey1827@gmail.com",
    bio: "Live in where you shine",
    preferences: "Detective and mystery, Historical Fiction",
    mobileNumber: "0123456789",
    dateOfBirth: "2004-02-29",
    password: "",
    confirmPassword: "",
    gender: "Female",
  };

  // Form Submission
  const onSubmit = (values) => {
    console.log("Form Data", values);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="bg-white rounded-md p-8">
        <p className="text-xl font-semibold">My Profile</p>
        <div className="flex flex-col items-center gap-4 pt-10 lg:pt-16">
          <div className="flex flex-col items-center">
            <img className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full cursor-pointer"
              src={profileImage} alt="Profile" onClick={handleClickImage}/>
            <input id="image_file" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }}/>
          </div>
          <div className="w-full pt-7">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              {({ values, setFieldValue }) => (
                <Form className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Username */}
                  <div>
                    <label htmlFor="fullName" className="block mb-2 text-gray-600">Full Name</label>
                    <Field type="text" id="fullName" name="fullName" className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" />
                    <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-600">Email</label>
                    <Field type="email" id="email" name="email" className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="mobileNumber" className="block mb-2 text-gray-600"> Mobile Number </label>
                    <Field type="text" id="mobileNumber" name="mobileNumber" className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" />
                    <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label htmlFor="dateOfBirth" className="block mb-2 text-gray-600"> Date of Birth </label>
                    <Field type="date" id="dateOfBirth" name="dateOfBirth" className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" />
                    <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Bio */}
                  <div>
                    <label htmlFor="bio" className="block mb-2 text-gray-600"> Bio </label>
                    <Field type="text" id="bio" name="bio" className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" />
                    <ErrorMessage name="bio" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Preferences */}
                  <div>
                    <label htmlFor="preferences" className="block mb-2 text-gray-600"> Preferences </label>
                    <Field type="text" id="preferences" name="preferences" className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" />
                    <ErrorMessage name="preferences" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block mb-2 text-gray-600"> Password </label>
                    <Field type="password" id="password" name="password" className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block mb-2 text-gray-600"> Confirmed Password </label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary" />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Gender */}
                  <div className="col-span-2">
                    <label className="block mb-2 text-gray-600">Gender</label>
                    <div className="flex items-center space-x-4">
                      <label>
                        <Field type="radio" name="gender" value="Male" checked={values.gender === "Male"} className="text-primary focus:ring-primary"
                          onChange={() => setFieldValue("gender", "Male")}
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label>
                        <Field type="radio" name="gender" value="Female" checked={values.gender === "Female"} className="text-primary focus:ring-primary"
                          onChange={() => setFieldValue("gender", "Female")}
                        />
                        <span className="ml-2">Female</span>
                      </label>
                    </div>
                    <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-2 flex justify-start">
                    <button type="submit" className="px-4 py-2 bg-primary text-black rounded-md hover:bg-green-500 hover:text-white">
                      Update
                    </button>
                  </div>
              </Form>
            )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  )
}
