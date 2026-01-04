import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTheme } from '@/hooks/useTheme';

export const Route = createRootRoute({
  component: () => {
    useTheme();

    return (
    <>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );}
})
