import { TodoWrapper } from "./components/TodoWrapper/page";


function App() {
  return (
    <div className="bg-[#f5f5f5] text-white h-screen flex justify-center items-center ">
      <div className="bg-black m-3 p-5 lg:w-[500px] rounded container">
        <TodoWrapper />
        
      </div>
    </div>
  );
}

export default App;
