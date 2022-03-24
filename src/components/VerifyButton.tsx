import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { Post } from '../shared/types';
import { useStore } from '../store/Provider';

interface Props {
  post: Post;
}

function VerifyButton ({ post } : {post : Post}) {
  const store = useStore();

  const handleVerify = useCallback(() => {
    store.verifyPost(post.id);
  }, [store, post.id]);

  if (post.verified) {
    return null;
  }

  return (
    <Button variant="light" className="mr-3" onClick={handleVerify}>
      Verify Signature
    </Button>
  );
};

export default VerifyButton;
