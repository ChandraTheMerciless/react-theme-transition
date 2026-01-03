import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="p-4 flex gap-4 bg-gray-100">
        <Link to="/" className="[&.active]:font-bold text-blue-600">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold text-blue-600">
          About
        </Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
