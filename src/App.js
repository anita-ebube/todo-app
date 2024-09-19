import { TodoWrapper } from "./components/TodoWrapper/page";


function App() {
  return (
    <div className="bg-[#f5f5f5] h-screen flex justify-center items-center ">
      <div className="bg-white p-5 lg:w-[500px]">
        <TodoWrapper />
        
      </div>
    </div>
  );
}

export default App;
