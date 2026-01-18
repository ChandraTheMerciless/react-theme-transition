import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/layout/Navbar';

export const Route = createRootRoute({
  component: () => {
    useTheme();

    return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );}
})
