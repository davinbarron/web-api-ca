import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({
  user: { type: String, required: true }, // Username of the watchlist owner
  movieId: { type: Number, required: true }, // TMDb movie ID
  title: { type: String, required: true }, // Movie title
  poster_path: { type: String }, // Movie poster path
  addedAt: { type: Date, default: Date.now } // Timestamp when the movie was added
});

WatchlistSchema.statics.findByUser = function (user) {
  return this.find({ user: user });
};

export default mongoose.model('Watchlist', WatchlistSchema);
