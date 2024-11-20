import Review from '../model/review-schema.js';

export const getreviews = async (req, res) => {
    const { productId } = req.params;

    try {
        const reviews = await Review.find({ productId }).sort({ date: -1 });  // Sort by date descending
        res.json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching reviews' });
    }
};

export default getreviews;