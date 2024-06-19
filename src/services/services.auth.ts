import { jwtDecode } from "jwt-decode"; // Importação correta
import api from "../services/api";
import { ILogin } from "../interfaces/login";

const tokenKey = "fuji"; // Chave para armazenar o token

export const authService = {
  async authenticUser(data: ILogin) {
    try {
      const response = await api.post("auth/login", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      throw error;
    }
  },

  setToken(data: any) {
    try {
      console.log(data);
      console.log("aa");
      localStorage.setItem(tokenKey, data);
    } catch (error) {
      console.error("Erro ao definir o token no localStorage:", error);
    }
  },

  getToken() {
    try {
      return localStorage.getItem(tokenKey);
    } catch (error) {
      console.error("Erro ao obter o token do localStorage:", error);
      return null;
    }
  },

  removeToken() {
    try {
      localStorage.removeItem(tokenKey);
    } catch (error) {
      console.error("Erro ao remover o token do localStorage:", error);
    }
  },

  decodificarToken(token: string | null | undefined) {
    if (token) {
      try {
        const decode: any = jwtDecode(token);
        return decode;
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        return null;
      }
    }
    return null;
  },

  getRole() {
    const token = this.getToken();
    const decodedToken: any = this.decodificarToken(token);
    if (decodedToken) {
      return decodedToken?.role;
    }
    return null;
  },
};
