import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { Post } from '../shared/types';
import { useStore } from '../store/Provider';

interface Props {
  post: Post;
}

function VoteButton ({ post } : {post: Post}) {
  const store = useStore();

  // create an invoice and show the modal when the button is clicked
  const handleUpvoteClick = useCallback(async () => {
    await store.showPaymentRequest(post);
  }, [store, post]);

  return (
    <Button variant="outline-primary" onClick={handleUpvoteClick}>
      Upvote
    </Button>
  );
};

export default VoteButton;
