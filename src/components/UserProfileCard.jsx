import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiTrophy, FiStar, FiActivity } = FiIcons;

const UserProfileCard = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors"
    >
      <div className="relative h-32">
        <img 
          src={user.banner} 
          alt="Profile Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
      <div className="relative px-6 pb-6">
        <div className="flex items-center -mt-12 mb-4">
          <img 
            src={user.avatar} 
            alt={user.username} 
            className="w-24 h-24 rounded-full border-4 border-gray-800"
          />
          <div className="ml-4 mt-12">
            <h3 className="text-xl font-bold text-white">{user.username}</h3>
            <p className="text-gray-400">Level {user.level}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <div className="text-xl font-bold text-white">{user.stats.tournaments}</div>
            <div className="text-sm text-gray-400">Tournaments</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">{user.stats.wins}</div>
            <div className="text-sm text-gray-400">Wins</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">{user.stats.winRate}%</div>
            <div className="text-sm text-gray-400">Win Rate</div>
          </div>
        </div>
        <Link 
          to={`/profile/${user.username}`}
          className="block w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-center rounded-lg transition-colors"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
};

export default UserProfileCard;