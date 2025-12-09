import Layout from "../layout";
import Home from "../pages/Home";

const ROUTES = [
  {
    path: "/",
    element: <Layout />,
    children:[
        {
            index:true,
            element:<Home />
        }
    ]
  },
];

export default ROUTES;