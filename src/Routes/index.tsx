import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

const About = React.lazy(() => import("../Pages/About"));
const Home = React.lazy(() => import("../Pages/Home"));
const Contact = React.lazy(() => import("../Pages/Contact"));

export const Routes: React.FC = ({ children }) => {
  return (
    <Suspense fallback={<Spinner colorScheme="pink" />}>
      <BrowserRouter basename="react-lazy">
        {children}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

// import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { About } from "../Pages/About";
// import { Home } from "../Pages/Home";

// export const Routes: React.FC = ({ children }) => {
//   return (
//     <BrowserRouter basename="react-lazy">
//       {children}
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//       </Switch>
//     </BrowserRouter>
//   );
// };
