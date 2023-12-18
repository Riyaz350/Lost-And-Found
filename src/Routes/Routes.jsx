import {createBrowserRouter,} from "react-router-dom";
import Home from '../Layouts/Home/Home';
import Lost from '../Layouts/Home/Lost/Lost';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/lost",
          element: <Lost></Lost>
        },
      ],
    },
  ]);

export default Routes;