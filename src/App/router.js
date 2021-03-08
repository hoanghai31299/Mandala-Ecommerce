import Blog from "./components/Blog";
import BlogDetail from "./page/BlogDetail";
import HomePage from "./page/Home";
import Signin from "./page/Signin";
import Signup from "./page/Signup";

const router = [
  { path: "/", component: HomePage, exact: true },
  { path: "/signin", component: Signin, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/blogs", component: Blog, exact: true },
  { path: "/blog-detail", component: BlogDetail, exact: true },
];

export default router;
