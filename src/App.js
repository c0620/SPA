import { BrowserRouter, createBrowserRouter, Route, Routes, RouterProvider, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import { Home } from "./pages/home";
import { Top } from "./pages/top";
import { Notifications } from "./pages/notifications";
import { Category } from "./pages/category";
import { Recipe } from "./pages/recipe";

function NoMatch() {
    let location = useLocation();

    return (
      <div>
        <h1>Opps!</h1>
        <h3>Page {location.pathname} does not exist...</h3>
      </div>
    )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="*" element={<NoMatch />} />
            <Route path="/" element={<Home />}/>
            <Route path="top/" element={<Top />}/>
            <Route path="notifications/" element={<Notifications />}/>
            <Route path="category/:name" element={<Category />} />
            <Route path="meal/:id" element={<Recipe />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
