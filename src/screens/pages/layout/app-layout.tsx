import { Outlet } from "react-router-dom";

export default function AppLayout({ isLoggedIn }: { isLoggedIn?: boolean }) {
  return (
    <div className="camo-bg flex items-center justify-center h-screen w-screen overflow-hidden flex-col">

      {/* Header */}
      <header className={`h-16 w-full flex items-center ${isLoggedIn ? 'justify-between' : 'justify-center'} px-6 border-b`}>
        <h1 className="font-bold">Document Handler</h1>
        {isLoggedIn && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        )}
      </header>

      <main className="h-full w-full flex items-center justify-center">
        <Outlet />
      </main>

      <footer className="h-12 flex items-center justify-center border-t text-sm">
        © 2026 Document Handler. All rights reserved.
      </footer>

    </div>
  );
}