import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from './header.jsx';
import { Sidebar } from './sidebar.jsx';
import { useIsMobile } from '../../hooks/use-mobile.js';

export default function DashboardLayout() {
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {!isMobile && <Sidebar />} {/* Sidebar only for non-mobile views */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto p-4 md:p-6"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
