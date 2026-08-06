import type { RouteObject } from "react-router-dom";
import { Layout } from "./layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Team from "./pages/Team";
import Papers from "./pages/Papers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import QiankunNet from "./pages/QiankunNet";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/research", element: <Research /> },
      { path: "/team", element: <Team /> },
      { path: "/papers", element: <Papers /> },
      { path: "/news", element: <News /> },
      { path: "/contact", element: <Contact /> },
      { path: "/qiankunnet", element: <QiankunNet /> },
    ],
  },
];
