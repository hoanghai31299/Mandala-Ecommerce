import Blog from "./components/Blog";
import BlogDetail from "./page/BlogDetail";
import Contact from "./page/Contact";
import HomePage from "./page/Home";
import Products from "./page/Products";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import About from "./page/About";
import ProductDetail from "./page/ProductDetail";
import Cart from "./page/Cart";
import Account from "./page/Account";

const router = [
  { path: "/", component: HomePage, exact: true },
  { path: "/signin", component: Signin, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/blogs", component: Blog, exact: true },
  { path: "/blog-detail", component: BlogDetail, exact: true },
  { path: "/products", component: Products, exact: true },
  { path: "/contact", component: Contact, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/product-detail", component: ProductDetail, exact: true },
  { path: "/cart", component: Cart, exact: true },
  { path: "/account", component: Account, exact: true },
];

export default router;
