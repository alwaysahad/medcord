import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  Share2, 
  Shield, 
  Calendar, 
  MessageSquare, 
  HelpCircle 
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: FileText, label: 'Medical Records', path: '/medical-records' },
  { icon: Share2, label: 'Share Records', path: '/share-records' },
  { icon: Shield, label: 'Permissions', path: '/permissions' },
  { icon: Calendar, label: 'Appointments', path: '/appointments' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: HelpCircle, label: 'Support', path: '/support' },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg h-[calc(100vh-4rem)] 
                    border-r border-gray-200 dark:border-gray-700/50 transition-all duration-200">
      <nav className="mt-8">
        <div className="px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`sidebar-item ${
                location.pathname === item.path
                  ? 'sidebar-item-active'
                  : 'sidebar-item-inactive'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}