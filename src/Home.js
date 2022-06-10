import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:3000/blogs'); 

  

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
      <br/>
      <br/>
      <br/>
      <h4>ckeck out this quest and suport this site: <br/>https://amzn.to/39kcpMY</h4>
    </div>
  );
}
 
export default Home;
