import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function CustomerReviews() {

  const handleOnSubmit = (values, { resetForm }) => {
    console.log("Form Submitted", values);
    alert("Thank you for your feedback!");
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    message: Yup.string(),
    rating: Yup.number()
      .required("Rating is required")
      .min(1, "Please select a rating"),
  });

  return (
    <div>
      <section className="py-10 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8 text-center">Our customer reviews</h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
      {/* Ratings Breakdown */}
      <div className="box flex flex-col gap-y-4 w-full">
        {/* Loop through ratings */}
        {[5, 4, 3, 2, 1].map((rating, index) => {
          const percentages = [93, 4, 2, 1, 0]; // Example percentages
          const count = [9180, 84, 24, 12, 3]; // Example counts
          return (
            <div className="flex items-center w-full" key={index}>
              <p className="font-medium text-lg text-black mr-0.5">{rating}</p>
              <FaStar className="text-amber-400 text-lg" />
              <div className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-orange-100 ml-5 mr-3">
                <span
                  className="h-full rounded-3xl bg-amber-400 flex"
                  style={{ width: `${percentages[index]}%` }}
                ></span>
              </div>
              <p className="font-medium text-lg text-black">{count[index]}</p>
            </div>
          );
        })}
      </div>

      {/* Average Rating Display */}
      <div className="p-8 bg-orange-50 rounded-3xl flex items-center justify-center flex-col">
        <h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6">4.8</h2>
        <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) =>
              i < 4 ? (
                <FaStar key={i} className="text-amber-400 text-4xl" />
              ) : (
                <FaStarHalfAlt key={i} className="text-amber-400 text-4xl" />
              )
            )}
        </div>
        <p className="font-medium text-xl leading-8 text-gray-900 text-center">
          9885 Ratings
        </p>
      </div>

      {/* Customer Rating Form */}
      <div className="col-span-2 mt-10">
        <h3 className="text-2xl font-bold mb-4 text-black">Review &quot;Sample Book&quot;</h3>
        <Formik
        initialValues={{ name: "", email: "", message: "", rating: 0 }}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="bg-gray-50 border p-6 rounded-lg shadow-md flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="font-medium text-gray-700" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Your Rating <span className="text-red-500">*</span></label>
              <div className="flex gap-2 text-2xl text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setFieldValue("rating", star)}
                    className="focus:outline-none"
                  >
                    {values.rating >= star ? (
                      <FaStar />
                    ) : (
                      <FaRegStar className="text-gray-400" />
                    )}
                  </button>
                ))}
              </div>
              <ErrorMessage
                name="rating"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="font-medium text-gray-700" htmlFor="message">
                Your Message 
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Leave a comment..."
                rows="4"
                className="p-3 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
  
            <button
              type="submit"
              className="mt-4 bg-primary text-tertiary font-semibold p-3 rounded-md hover:bg-secondary hover:text-white transition"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      </div>
    </div>

          {/* Individual Reviews */}
          {[{
            title: "Outstanding Experience!!!",
            author: "John Watson",
            date: "Nov 01, 2023",
            content: "One of the standout features of Pagedone is its intuitive and user-friendly interface.",
            imgSrc: "https://pagedone.io/asset/uploads/1704349572.png"
          }, {
            title: "Pagedone's design system seamlessly bridges the gap...",
            author: "Robert Karmazov",
            date: "Nov 01, 2023",
            content: "Pagedone doesn't disappoint when it comes to the variety and richness of its design components.",
            imgSrc: "https://pagedone.io/asset/uploads/1704351103.png"
          }].map((review, index) => (
            <div className="pt-8 max-xl:max-w-2xl max-xl:mx-auto" key={index}>
              <div className="flex items-center gap-3 mb-4">
                {Array(5).fill(<FaStar className="text-amber-400 text-xl" />)}
              </div>
              <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                <div className="flex items-center gap-3">
                  <img src={review.imgSrc} alt={`${review.author} image`} className="w-8 h-8 rounded-full object-cover" />
                  <h6 className="font-semibold text-lg leading-8 text-tertiary">{review.author}</h6>
                </div>
                <p className="font-normal text-lg leading-8 text-gray-400">{review.date}</p>
              </div>
              <p className="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify">{review.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}