import { useState } from "react";

export const CreateAccount = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-50 font-sans">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg flex flex-col items-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
            <span className="text-xs">Ícone</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-emerald-900 mb-2 text-center">
          Criar Perfil
        </h1>
        <p className="text-sm text-emerald-600 mb-8 text-center">
          Adicione as informações para criar um perfil
        </p>

        <form className="w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-emerald-600 text-sm font-medium mb-2 pl-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="text"
              value={name}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition duration-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-emerald-600 text-sm font-medium mb-2 pl-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="email@email.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-emerald-600 text-sm font-medium mb-2 pl-1"
            >
              CPF
            </label>
            <input
              type="text"
              id="text"
              value={cpf}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition duration-200"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-emerald-600 text-sm font-medium mb-2 pl-1"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition duration-200"
            />
          </div>

                    <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-emerald-600 text-sm font-medium mb-2 pl-1"
            >
              Confirmação de Senha
            </label>
            <input
              type="password"
              id="password"
              value={passwordConfirmation}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};
