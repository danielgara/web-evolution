import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="post-preview">
    <Link to={post.slug}>
      <h2 className="post-title">
        {post.title}
      </h2>
    </Link>
    <p className="post-meta">Posted by <span>Admin</span> on {post.created_at}</p>
  </div>
);

export default PostLink