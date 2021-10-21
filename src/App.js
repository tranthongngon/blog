import HeaderParent from "./Components/Header/HeaderParent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css'
import './common.css'
import './font.css'
import Home from "./Components/Home/Home";
import Featured from "./Components/Featured/Featured";
import Category from "./Components/Category/Category";
import Contact from "./Components/Contact/Contact";
import Single from "./Components/Single/Single";
import Editor from "./Components/Editor/Editor";
import AllBlogPosts from "./Components/AllBlogPosts/AllBlogPosts";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Router>
      <div className="site-wrpper">
        <HeaderParent/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/featured" component= {Featured}/>
          <Route path="/single/:id" component={Single} />
          <Route path="/all-blog-posts" component={AllBlogPosts}/>
          <Route path="/category/:type" exact component= {Category}/>
          <Route path="/search/:result" component={Search}/>
          <Route path="/contact" component = {Contact}/>
          <Route path="/editor" component = {Editor}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
