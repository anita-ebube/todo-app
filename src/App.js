import { TodoWrapper } from "./components/TodoWrapper/page";


function App() {
  return (
    <div className="bg-[#f5f5f5] text-white h-screen flex justify-center items-center ">
      <div className="bg-black lg:500px p-5 m-5 rounded container">
        <TodoWrapper />
        
      </div>
    </div>
  );
}

export default App;
