import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import UserProfileCard from '../components/UserProfileCard';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiSearch, FiFilter } = FiIcons;

const UserProfiles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Mock user data
  const users = [
    {
      username: 'ProGamer2024',
      level: 42,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
      banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
      stats: {
        tournaments: 24,
        wins: 156,
        winRate: 68
      }
    },
    {
      username: 'EliteSniper',
      level: 38,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
      stats: {
        tournaments: 18,
        wins: 124,
        winRate: 72
      }
    },
    {
      username: 'TacticalAce',
      level: 35,
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200',
      banner: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800',
      stats: {
        tournaments: 15,
        wins: 98,
        winRate: 65
      }
    },
    {
      username: 'CyberNinja',
      level: 31,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      banner: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800',
      stats: {
        tournaments: 12,
        wins: 76,
        winRate: 63
      }
    }
  ];

  const filters = [
    { id: 'all', name: 'All Players' },
    { id: 'top', name: 'Top Players' },
    { id: 'active', name: 'Most Active' },
    { id: 'new', name: 'New Players' }
  ];

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SafeIcon icon={FiUsers} className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">User Profiles</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover and connect with players from our gaming community
            </p>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SafeIcon 
                icon={FiSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
              />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  filter === filterOption.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filterOption.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* User Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUsers.map((user, index) => (
            <UserProfileCard key={user.username} user={user} />
          ))}
        </div>

        {/* No Results */}
        {filteredUsers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <SafeIcon icon={FiSearch} className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No players found</h3>
            <p className="text-gray-400">Try adjusting your search terms</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default UserProfiles;