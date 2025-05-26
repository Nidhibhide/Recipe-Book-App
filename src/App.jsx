import { Outlet } from "@tanstack/react-router";
import Header from "./pages/Header";
function App() {
  return (
    <>
      <div className="h-screen flex w-full flex-col">
        <div className="h-[8%] bg-red-400 w-full">
        <Header/>
        </div>
        <div className="h-[90%] w-full">
        <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
