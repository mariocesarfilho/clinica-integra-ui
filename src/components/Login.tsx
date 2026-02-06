
export const Login = () => {
    return (
<div className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
    <form className="space-y-5">
        
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
            </label>
            <input 
                type="email" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="seu@email.com"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Senha
            </label>
            <input 
                type="password" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="••••••••"/>
        </div>

        <button>Enviar</button>

    </form>
</div>
    );
}