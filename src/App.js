import "./CSS/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./WebsitePages/Nav";
import PostList from "./WebsitePages/Posts";
import PostDetail from "./WebsitePages/PostDetail";
import Footer from "./WebsitePages/Footer";
import ArchiveList from "./WebsitePages/Archive";
import UnsubscribeForm from "./WebsitePages/Unsubscribe";
import AboutMe from "./WebsitePages/AboutMe";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" index element={<PostList />} />
                <Route path="/unsubscribe" index element={<UnsubscribeForm />} />
                <Route path="/blog/:slug" element={<PostDetail />} />
                <Route path="/blog/archive" element={<ArchiveList />} />
                <Route path="/about" element={<AboutMe/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
