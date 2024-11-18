import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MovieCard from "./components/Moviecard"; // Same here, adjust if necessary

// Import the components for routing
import Treading from "./pages/Treading";  // Adjust the path based on your file structure

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-600 text-white pt-32 pb-16">
        <Routes>
          <Route path="/" element={<Treading />} />
          {/* <Route path="/movie/:id" element={<MovieCard />} /> */}
        </Routes>
        {/* Uncomment if you need additional routes */}
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </div>
      <Navigation />
    </>
  );
}

export default App;
