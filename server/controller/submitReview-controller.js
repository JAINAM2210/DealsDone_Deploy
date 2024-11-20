import Review from '../model/review-schema.js';

export const submitReview = async (req, res) => {
    try {
        const { productId, rating, reviewText } = req.body;

        console.log("body is" ,req.body);

        if ( !rating || !reviewText) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Create a new review
        const newReview = new Review({
            productId,
            rating,
            reviewText,
            date: new Date(),
        });

        // Save the review to the database
        await newReview.save();

        res.status(201).json({ message: 'Review submitted successfully', review: newReview });
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};