import React, { useState, useEffect } from "react";
import appWriteService from "../appwrite/conf";
import { Postcard, Container } from "../components";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appWriteService.getPosts([]).then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);
  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.id} className="p-2 w-1/4">
              <Postcard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
