import Header from "./components/Header"
import Footer from "./components/Footer";
import Settings from "./layouts/Settings";
import Preview from "./layouts/Preview/Preview";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
		<Header />
		<main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-now">
			<Settings />
			<Preview />
		</main>
		<Footer />
    </div>
  );
}

export default App;
