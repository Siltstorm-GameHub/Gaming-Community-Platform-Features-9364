import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiUser,
  FiTrophy,
  FiStar,
  FiActivity,
  FiCalendar,
  FiTarget,
  FiTrendingUp,
  FiAward,
  FiClock,
  FiUsers
} = FiIcons;

const UserProfile = () => {
  const { username } = useParams();

  // Mock user data (in a real app, this would come from an API)
  const userData = {
    username: username || 'ProGamer2024',
    level: 42,
    xp: 8750,
    totalXp: 10000,
    joinDate: '2023-01-15',
    status: 'online',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200',
    achievements: [
      { id: 1, name: 'Tournament Victor', description: 'Won first place in a major tournament', icon: FiTrophy, date: '2024-02-15' },
      { id: 2, name: 'Skill Master', description: 'Reached max level in competitive ranking', icon: FiStar, date: '2024-01-20' },
      { id: 3, name: 'Community Leader', description: 'Contributed significantly to the community', icon: FiUsers, date: '2023-12-10' }
    ],
    stats: {
      tournaments: 24,
      wins: 156,
      winRate: 68,
      playTime: '450h',
      rank: 'Diamond',
      rating: 2150
    },
    recentActivity: [
      { id: 1, type: 'tournament', description: 'Won Spring Championship Finals', date: '2024-03-10' },
      { id: 2, type: 'achievement', description: 'Unlocked "Precision Master" achievement', date: '2024-03-08' },
      { id: 3, type: 'rank', description: 'Reached Diamond III Division', date: '2024-03-05' }
    ]
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'tournament': return FiTrophy;
      case 'achievement': return FiAward;
      case 'rank': return FiTarget;
      default: return FiActivity;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 pb-12"
    >
      {/* Banner and Profile Info */}
      <div className="relative h-64 md:h-80">
        <img
          src={userData.banner}
          alt="Profile Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-xl shadow-xl p-6"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={userData.avatar}
                alt={userData.username}
                className="w-32 h-32 rounded-full border-4 border-purple-500"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">{userData.username}</h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    userData.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                  } text-white`}>
                    {userData.status}
                  </span>
                </div>
                <div className="text-gray-400 mb-4">
                  <SafeIcon icon={FiCalendar} className="inline-block mr-2" />
                  Joined {userData.joinDate}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{userData.stats.tournaments}</div>
                    <div className="text-sm text-gray-400">Tournaments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{userData.stats.wins}</div>
                    <div className="text-sm text-gray-400">Wins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{userData.stats.winRate}%</div>
                    <div className="text-sm text-gray-400">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{userData.stats.rank}</div>
                    <div className="text-sm text-gray-400">Rank</div>
                  </div>
                </div>
              </div>
              {/* Level Progress */}
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Level {userData.level}</div>
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500"
                    style={{ width: `${(userData.xp / userData.totalXp) * 100}%` }}
                  />
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {userData.xp}/{userData.totalXp} XP
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Stats Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <SafeIcon icon={FiActivity} className="mr-2 text-purple-400" />
              Gaming Statistics
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <SafeIcon icon={FiTrophy} className="h-6 w-6 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold text-white">{userData.stats.tournaments}</div>
                <div className="text-sm text-gray-400">Tournaments</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <SafeIcon icon={FiTarget} className="h-6 w-6 text-red-400 mb-2" />
                <div className="text-2xl font-bold text-white">{userData.stats.rating}</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <SafeIcon icon={FiTrendingUp} className="h-6 w-6 text-green-400 mb-2" />
                <div className="text-2xl font-bold text-white">{userData.stats.winRate}%</div>
                <div className="text-sm text-gray-400">Win Rate</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <SafeIcon icon={FiClock} className="h-6 w-6 text-blue-400 mb-2" />
                <div className="text-2xl font-bold text-white">{userData.stats.playTime}</div>
                <div className="text-sm text-gray-400">Play Time</div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <SafeIcon icon={FiAward} className="mr-2 text-purple-400" />
              Recent Achievements
            </h2>
            <div className="space-y-4">
              {userData.achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center bg-gray-700 rounded-lg p-4">
                  <SafeIcon icon={achievement.icon} className="h-8 w-8 text-yellow-400 mr-4" />
                  <div className="flex-1">
                    <div className="font-medium text-white">{achievement.name}</div>
                    <div className="text-sm text-gray-400">{achievement.description}</div>
                  </div>
                  <div className="text-sm text-gray-400">{achievement.date}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 bg-gray-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <SafeIcon icon={FiActivity} className="mr-2 text-purple-400" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {userData.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center bg-gray-700 rounded-lg p-4">
                  <SafeIcon
                    icon={getActivityIcon(activity.type)}
                    className="h-6 w-6 text-purple-400 mr-4"
                  />
                  <div className="flex-1">
                    <div className="text-white">{activity.description}</div>
                    <div className="text-sm text-gray-400">{activity.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;