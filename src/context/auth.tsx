import { createContext, useState } from "react";
import { authService } from "../services/services.auth";
import { ILogin } from "../interfaces/login";

interface AuthContextType {
  token: string | null;
  role: string | null | undefined;
  login: Function;
  logout: Function;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string | null>(authService.getToken());
  const [role, setRole] = useState<string | null | undefined>(
    authService.getRole()
  );

  const login = async (data: ILogin) => {
    await authService.authenticUser(data).then(async (resp) => {
      const respToken = resp.access_token;
      if (respToken) {
        authService.setToken(respToken);
        setToken(respToken);
        const respRole = authService.decodificarToken(respToken)?.role;
        if (respRole) {
          setRole(respRole);
        }
      }

      if (resp.status === 401) {
        setToken(null);
        throw new Error("Login ou senha inválidos");
      }
    });
  };

  const logout = () => {
    authService.removeToken();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, role }}>
      {children}
    </AuthContext.Provider>
  );
}
