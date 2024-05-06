import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const apiData = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((json) => json);
        setPosts(apiData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading || !posts) {
    return <h1>loading ...</h1>;
  }

  return (
    <div>
      <Link to="/">Dashboard</Link>
      {posts?.map((post) => {
        return <h1 key={post.id}>{post.title}</h1>;
      })}
    </div>
  );
}

export default Posts;
