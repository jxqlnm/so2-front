import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LEVEL } from "../enums/level";
import { LogOut } from "lucide-react";

export function Navbar() {
  const nav = useNavigate();
  const auth = useAuth();

  return (
    <>
      {auth?.token != null && (
        <div className="navbar bg-gray-600">
          <div className="flex-1">
            <a onClick={() => nav("/")} className="btn btn-ghost text-xl">
              Fuji
            </a>
          </div>
          <div className="flex-1">
            <a
              onClick={() => nav("/create-product")}
              className="btn btn-ghost text-xl"
            >
              Cadastrar Produto
            </a>
          </div>
          <div className="flex-2">
            <a
              onClick={() => {
                auth?.logout();
                nav("/login");
              }}
              className="btn btn-ghost text-xl"
            >
              <LogOut />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
