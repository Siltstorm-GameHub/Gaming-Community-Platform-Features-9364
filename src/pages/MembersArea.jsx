import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const { FiLock, FiUser, FiSettings, FiMessageSquare, FiCalendar, FiDownload, FiVideo, FiBookOpen, FiAward } = FiIcons;

const MembersArea = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: FiUser },
    { id: 'exclusive', label: 'Exclusive Content', icon: FiLock },
    { id: 'community', label: 'Private Forums', icon: FiMessageSquare },
    { id: 'events', label: 'Member Events', icon: FiCalendar },
    { id: 'downloads', label: 'Downloads', icon: FiDownload }
  ];

  const exclusiveContent = [
    {
      type: 'video',
      title: 'Pro Player Masterclass: Advanced Strategies',
      description: 'Learn from the best with exclusive gameplay analysis and tips.',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
      duration: '45 min',
      level: 'Advanced'
    },
    {
      type: 'guide',
      title: 'Complete Tournament Preparation Guide',
      description: 'Everything you need to know to compete at the highest level.',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
      duration: 'Read',
      level: 'All Levels'
    },
    {
      type: 'video',
      title: 'Behind the Scenes: Championship Finals',
      description: 'Exclusive footage from our biggest tournament of the year.',
      thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400',
      duration: '30 min',
      level: 'Entertainment'
    }
  ];

  const memberEvents = [
    {
      title: 'VIP Tournament Preview',
      date: '2024-03-20',
      time: '19:00 UTC',
      description: 'Get early access to upcoming tournament details and strategies.',
      status: 'upcoming'
    },
    {
      title: 'Monthly Strategy Session',
      date: '2024-03-25',
      time: '20:00 UTC',
      description: 'Interactive session with pro players and coaches.',
      status: 'upcoming'
    },
    {
      title: 'Member-Only Tournament',
      date: '2024-04-01',
      time: '18:00 UTC',
      description: 'Exclusive tournament for premium members only.',
      status: 'registration'
    }
  ];

  const downloads = [
    {
      name: 'Premium Crosshair Pack',
      description: 'Custom crosshairs used by professional players.',
      size: '2.5 MB',
      downloads: 1247
    },
    {
      name: 'Advanced Config Files',
      description: 'Optimized game configurations for competitive play.',
      size: '1.8 MB',
      downloads: 892
    },
    {
      name: 'Strategy Playbook PDF',
      description: 'Comprehensive guide to team strategies and tactics.',
      size: '15.2 MB',
      downloads: 2103
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Welcome back, {user.username}!</h2>
        <p className="text-purple-100 mb-6">
          You're part of an exclusive community of {user.level > 5 ? 'elite' : 'dedicated'} gamers.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="text-2xl font-bold">{user.level || 7}</div>
            <div className="text-sm">Member Level</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="text-2xl font-bold">{user.tournaments || 12}</div>
            <div className="text-sm">Tournaments Joined</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="text-2xl font-bold">{user.wins || 8}</div>
            <div className="text-sm">Tournament Wins</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center">
              <SafeIcon icon={FiAward} className="h-8 w-8 text-yellow-400 mr-3" />
              <div>
                <div className="text-white font-medium">Tournament Victory</div>
                <div className="text-gray-400 text-sm">Won Spring Championship Finals</div>
              </div>
            </div>
            <div className="text-gray-400 text-sm">2 days ago</div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center">
              <SafeIcon icon={FiVideo} className="h-8 w-8 text-purple-400 mr-3" />
              <div>
                <div className="text-white font-medium">Watched Exclusive Content</div>
                <div className="text-gray-400 text-sm">Pro Player Masterclass completed</div>
              </div>
            </div>
            <div className="text-gray-400 text-sm">1 week ago</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['exclusive', 'community', 'events', 'downloads'].map((tab) => {
          const tabData = tabs.find(t => t.id === tab);
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 text-center transition-colors group"
            >
              <SafeIcon 
                icon={tabData.icon} 
                className="h-8 w-8 text-purple-400 mx-auto mb-3 group-hover:text-purple-300" 
              />
              <div className="text-white font-medium">{tabData.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderExclusiveContent = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Exclusive Content</h2>
        <p className="text-gray-400">Premium content available only to our members</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exclusiveContent.map((content, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors group"
          >
            <div className="relative">
              <img
                src={content.thumbnail}
                alt={content.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-medium">
                  {content.level}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {content.duration}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">{content.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{content.description}</p>
              <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                {content.type === 'video' ? 'Watch Now' : 'Read Guide'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderMemberEvents = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Member Events</h2>
        <p className="text-gray-400">Exclusive events for our community members</p>
      </div>

      <div className="space-y-4">
        {memberEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{event.title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                event.status === 'upcoming' ? 'bg-blue-600 text-white' : 
                event.status === 'registration' ? 'bg-green-600 text-white' : 
                'bg-gray-600 text-white'
              }`}>
                {event.status === 'registration' ? 'Registration Open' : 'Upcoming'}
              </span>
            </div>
            <p className="text-gray-400 mb-4">{event.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-300">
                <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2" />
                <span>{event.date} at {event.time}</span>
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                {event.status === 'registration' ? 'Register' : 'Set Reminder'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderDownloads = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Member Downloads</h2>
        <p className="text-gray-400">Exclusive files and resources for members</p>
      </div>

      <div className="space-y-4">
        {downloads.map((download, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SafeIcon icon={FiDownload} className="h-8 w-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-white">{download.name}</h3>
                  <p className="text-gray-400 text-sm">{download.description}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>{download.size}</span>
                    <span className="mx-2">•</span>
                    <span>{download.downloads} downloads</span>
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                Download
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'exclusive': return renderExclusiveContent();
      case 'events': return renderMemberEvents();
      case 'downloads': return renderDownloads();
      case 'community': return (
        <div className="text-center py-16">
          <SafeIcon icon={FiMessageSquare} className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Private Forums</h2>
          <p className="text-gray-400">Connect with other members in our exclusive discussion forums.</p>
        </div>
      );
      default: return renderDashboard();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SafeIcon icon={FiLock} className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Members Area</h1>
            <p className="text-xl text-gray-400">
              Exclusive content and features for our premium community
            </p>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <SafeIcon icon={tab.icon} className="h-4 w-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MembersArea;