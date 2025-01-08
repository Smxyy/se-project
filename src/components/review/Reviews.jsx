import {useState} from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Reviews() {
  // Static review data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      bookTitle: "The Great Gatsby",
      rating: 4,
      reviewText: "A classic novel that beautifully explores themes of love, wealth, and the American Dream.",
    },
    {
      id: 2,
      bookTitle: "1984",
      rating: 5,
      reviewText: "A powerful dystopian novel that explores totalitarianism and surveillance. A must-read for everyone.",
    },
    {
      id: 3,
      bookTitle: "To Kill a Mockingbird",
      rating: 3,
      reviewText: "A touching story about racism and injustice in the South. The pacing was a bit slow, but it's still a powerful read.",
    },
  ]);

  const renderRating = (rating) => {
    const filledStars = Array(rating).fill(<FaStar className="text-yellow-300" />);
    const unfilledStars = Array(5 - rating).fill(<FaRegStar className="text-gray-400" />);
  
    return [...filledStars, ...unfilledStars];
  };

   // Handle open modal
   const handleEditClick = (review) => {
    setSelectedReview(review);
    setUpdatedRating(review.rating);
    setUpdatedReviewText(review.reviewText);
    setIsModalOpen(true);
  };

  // Handle form submission to update the review
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const updatedReviews = reviews.map((review) =>
      review.id === selectedReview.id
        ? { ...review, rating: updatedRating, reviewText: updatedReviewText }
        : review
    );
    setReviews(updatedReviews);
    setIsModalOpen(false); // Close the modal after updating
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedReview, setSelectedReview] = useState(null); // State to store the selected review to edit
  const [updatedRating, setUpdatedRating] = useState(0); // State to store the updated rating
  const [updatedReviewText, setUpdatedReviewText] = useState(""); // State to store updated review text

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    // Handle the delete functionality here
    console.log(`Deleting review with id: ${id}`);
    setReviews(reviews.filter(review => review.id !== id)); // Remove the review from the list
  };
  return (
    <div className="flex flex-col gap-8 w-full">
      <section className="bg-white rounded-md p-8 w-full">
        <p className="text-xl font-semibold">My Reviews</p>
        
        <div className="flex flex-col gap-4 pt-10 lg:pt-14 w-full">
        {reviews.length === 0 ? (
        <p className="text-lg text-gray-600">You haven&apos;t written any reviews yet.</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white shadow-lg rounded-lg p-6 border ">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{review.bookTitle}</h2>
                  <div className="flex items-center space-x-2">
                    {renderRating(review.rating)}
                    <span className="text-gray-500">({review.rating} / 5)</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button onClick={() => handleEditClick(review)}
                    className="text-blue-600 bg-blue-100 hover:text-white hover:bg-blue-600 px-2 py-1 rounded-md">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(review.id)}
                    className="text-red-500 bg-red-100 hover:text-white hover:bg-red-500 px-2 py-1 rounded-md">
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{review.reviewText}</p>
            </div>
          ))}
        </div>
      )}
          {/* Modal for editing review */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Review</h2>
            <form onSubmit={handleUpdateReview}>
              <div className="mb-4">
                <label className="block text-gray-700">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={updatedRating}
                  onChange={(e) => setUpdatedRating(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Review Text</label>
                <textarea
                  value={updatedReviewText}
                  onChange={(e) => setUpdatedReviewText(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  rows="4"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={closeModal}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-black rounded-md hover:text-white hover:bg-emerald-500">
                  Update Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
          </div>
      </section>      
    </div>
  )
}
