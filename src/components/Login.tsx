import { useState } from "react";
import { postUserByLogin } from "../services/user";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePostLogin = async () => {
    const payload = {
      email,
      password,
    };
    const response = await postUserByLogin(payload);

    if (response.success) {
      console.log("Sucesso!", response.data?.token);
    } else {
      console.log("Erro!", response.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <form
        className="space-y-5"
        onSubmit={(e) => {
          handlePostLogin();
          e.preventDefault();
        }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            required
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="seu@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <input
            type="password"
            value={password}
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
