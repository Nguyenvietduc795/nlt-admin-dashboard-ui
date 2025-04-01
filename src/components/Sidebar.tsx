
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  ActivityIcon,
  Ban,
  BookX,
  BookmarkX,
  Calendar,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Database,
  HelpCircle,
  Layout,
  LogOut,
  Settings,
  Users,
  Webhook,
  User,
  Briefcase,
  UserPlus,
} from 'lucide-react';

type MenuItem = {
  icon: React.ElementType;
  label: string;
  path?: string;
  children?: MenuItem[];
  isActive?: boolean;
};

const menuItems: MenuItem[] = [
  {
    icon: Layout,
    label: 'Dashboard',
    path: '/',
  },
  {
    icon: Database,
    label: 'Administration',
    children: [
      { icon: Settings, label: 'General', path: '/admin/general' },
      { icon: Users, label: 'Users', path: '/admin/users' },
    ],
  },
  {
    icon: Webhook,
    label: 'Webhooks',
    path: '/webhooks',
  },
  {
    icon: Briefcase,
    label: 'Recruitment',
    children: [
      { icon: UserPlus, label: 'Applications', path: '/recruitment/applications' },
      { icon: ClipboardList, label: 'Jobs', path: '/recruitment/jobs' },
    ],
  },
  {
    icon: ActivityIcon,
    label: 'Member activities',
    path: '/activities',
  },
  {
    icon: User,
    label: 'Members Information',
    path: '/members',
  },
  {
    icon: Users,
    label: 'Teams',
    path: '/teams',
  },
  {
    icon: Users,
    label: 'Groups',
    path: '/groups',
  },
  {
    icon: HelpCircle,
    label: 'Q & A',
    children: [
      { icon: HelpCircle, label: 'View Questions', path: '/qa/questions' },
      { icon: HelpCircle, label: 'Post Answer', path: '/qa/answers' },
    ],
  },
  {
    icon: Ban,
    label: 'Black List',
    path: '/blacklist',
  },
  {
    icon: Ban,
    label: 'Banned',
    path: '/banned',
  },
  {
    icon: BookX,
    label: 'Return lessons',
    path: '/return-lessons',
  },
  {
    icon: BookmarkX,
    label: 'Off lessons',
    path: '/off-lessons',
  },
  {
    icon: Calendar,
    label: 'Time Report',
    path: '/time-report',
  },
  {
    icon: LogOut,
    label: 'Logout',
    path: '/logout',
  },
];

const SidebarItem: React.FC<{
  item: MenuItem;
  expanded: boolean;
  toggleExpand: () => void;
  currentPath: string;
}> = ({ item, expanded, toggleExpand, currentPath }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.path === currentPath;
  const hasActiveChild = hasChildren && item.children?.some(child => child.path === currentPath);

  return (
    <li>
      <div 
        className={cn("sidebar-item", (isActive || hasActiveChild) && "active", "cursor-pointer")}
        onClick={hasChildren ? toggleExpand : undefined}
      >
        {hasChildren ? (
          <>
            <item.icon size={18} />
            <span className="flex-1">{item.label}</span>
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </>
        ) : (
          <Link to={item.path || '#'} className="flex items-center gap-3 w-full">
            <item.icon size={18} />
            <span>{item.label}</span>
          </Link>
        )}
      </div>

      {hasChildren && expanded && (
        <ul className="pl-8 pt-1 space-y-1">
          {item.children!.map((child, idx) => (
            <li key={idx}>
              <Link 
                to={child.path || '#'} 
                className={cn("sidebar-item", child.path === currentPath && "active")}
              >
                <child.icon size={16} />
                <span>{child.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const currentPath = window.location.pathname;

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div className="bg-sidebar h-screen border-r border-border p-4 overflow-y-auto w-64 fixed left-0 top-0">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-center mb-6">NLT SYSTEM</h2>
      </div>
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              expanded={!!expandedItems[item.label]}
              toggleExpand={() => toggleExpand(item.label)}
              currentPath={currentPath}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
