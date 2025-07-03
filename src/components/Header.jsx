import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-turquoise text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-semibold"></h1>
      <div className="flex items-center gap-4">
        <span>Username</span>
        <button className="bg-trueBlue hover:bg-electricBlue text-white px-3 py-1 rounded" 
          onClick={()=>{
            alert("logged out")
            navigate('/')
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
