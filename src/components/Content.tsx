// App.js
import { posts } from '../constants/post';
import Cards from './Collection/Cards';
import PostCard from './Postcard';

function Content() {
  return (
    <div className="container mx-auto rounded-lg col-span-6">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          profilePicture={post.profilePicture}
          username={post.username}
          handle={post.handle}
          description={post.description}
          postPicture={post.postPicture}
          actions={post.actions}
        />
      ))}
      <Cards />
    </div>
  );
}

export default Content;
