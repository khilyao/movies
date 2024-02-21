import { useEffect, useState } from "react";
import apiTool from "services/movieAPI";
import { Heading, Item, List } from "./Reviews.styled";

type ReviewsProps = {
  movieId: string | undefined;
};

type ReviewItem = {
  author?: string;
  content?: string;
};

const Reviews = ({ movieId }: ReviewsProps) => {
  const [reviews, setReviews] = useState<ReviewItem[]>();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (movieId) {
          const reviews = await apiTool.fetchMovieReviews(movieId);
          setReviews(reviews.results);
        }
      } catch (error) {
        console.error("Error fetching movie data:", (error as Error).message);
      }
    };

    fetchReviews();
  }, [movieId]);

  const reviewsMarkup = () => {
    if (!reviews || reviews.length === 0) {
      return <p>We don't have any reviews for this movie</p>;
    }

    return (
      <List>
        {reviews.map(({ author, content }) => (
          <Item key={author}>
            <Heading>{author}</Heading>
            <p>{content}</p>
          </Item>
        ))}
      </List>
    );
  };

  const reviewsList = reviewsMarkup();

  return <>{reviewsList}</>;
};

export default Reviews;
