import HeaderParent from "./Components/Header/HeaderParent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css'
import './common.css'
import './font.css'
import Home from "./Components/Home/Home";
import Featured from "./Components/Featured/Featured";
import Category from "./Components/Category/Category";
import Contact from "./Components/Contact/Contact";
import Beauty from "./Components/Category/Beauty";
import Single from "./Components/Single/Single";
import Fashion from "./Components/Category/Fashion";
import Travel from "./Components/Category/Travel";
import Lifestyle from "./Components/Category/Lifestyle";
import Editor from "./Components/Editor/Editor";
import AllBlogPosts from "./Components/AllBlogPosts/AllBlogPosts";

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
          <Route path="/category" exact component= {Category}/>
          <Route path="/category/beauty" component={Beauty}/>
          <Route path="/category/fashion" component={Fashion}/>
          <Route path="/category/travel" component={Travel}/>
          <Route path="/category/lifestyle" component={Lifestyle}/>
          <Route path="/contact" component = {Contact}/>
          <Route path="/editor" component = {Editor}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
