import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition duration-500 hover:rotate-[1deg] hover:scale-[1.02]">
        <h2 className="text-white text-3xl font-bold text-center mb-6 drop-shadow-lg">Welcome Back 👋</h2>
        <form className="space-y-6">
          <div>
            <label className="text-white block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-white block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold shadow-lg hover:shadow-2xl transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-white text-center mt-6 text-sm">
          Don’t have an account?{' '}
          <a href="#" className="underline hover:text-yellow-200 transition">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
