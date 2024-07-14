import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import TasksContextProvider from "./contexts/TasksContextProvider";

function App() {
  return (
    <div className="bg-alpha min-h-screen text-white">
      <BackgroundHeading />
      <main className="max-w-96 md:max-w-2xl lg:max-w-4xl mx-auto flex flex-col h-[500px] md:h-[600px]">
        <TasksContextProvider>
          <Header />
          <div className="bg-delta flex flex-col flex-grow justify-between md:flex-row">
            <TaskList />
            <Sidebar />
          </div>
        </TasksContextProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
