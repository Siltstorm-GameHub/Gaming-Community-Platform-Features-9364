import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrophy, FiMedal, FiAward, FiSearch, FiFilter, FiTarget, FiClock, FiUsers } = FiIcons;

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState('overall');
  const [timeFilter, setTimeFilter] = useState('all');

  const games = [
    { id: 'overall', name: 'Overall Rankings' },
    { id: 'valorant', name: 'Valorant' },
    { id: 'cs2', name: 'Counter-Strike 2' },
    { id: 'rocket-league', name: 'Rocket League' },
    { id: 'street-fighter', name: 'Street Fighter 6' }
  ];

  const timeFilters = [
    { id: 'all', name: 'All Time' },
    { id: 'month', name: 'This Month' },
    { id: 'week', name: 'This Week' },
    { id: 'today', name: 'Today' }
  ];

  const leaderboardData = [
    {
      rank: 1,
      username: 'ProGamer2024',
      points: 2850,
      wins: 47,
      tournaments: 12,
      winRate: 94,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      badge: 'Champion',
      country: 'USA',
      recentGain: '+150'
    },
    {
      rank: 2,
      username: 'EliteSniper',
      points: 2720,
      wins: 43,
      tournaments: 11,
      winRate: 91,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      badge: 'Master',
      country: 'UK',
      recentGain: '+120'
    },
    {
      rank: 3,
      username: 'TacticalAce',
      points: 2690,
      wins: 41,
      tournaments: 10,
      winRate: 89,
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100',
      badge: 'Master',
      country: 'Canada',
      recentGain: '+90'
    }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return FiTrophy;
      case 2: return FiMedal;
      case 3: return FiAward;
      default: return FiTarget;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'text-yellow-400';
      case 2: return 'text-gray-400';
      case 3: return 'text-orange-400';
      default: return 'text-purple-400';
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Champion': return 'bg-yellow-500';
      case 'Master': return 'bg-purple-500';
      case 'Expert': return 'bg-blue-500';
      case 'Advanced': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredLeaderboard = leaderboardData.filter(player =>
    player.username.toLowerCase().includes(searchTerm.toLowerCase())
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
            <SafeIcon icon={FiTrophy} className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Leaderboard</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Compete with the best and climb the ranks to glory
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search players..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Game Selection */}
          <div className="flex flex-wrap justify-center gap-2">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedGame === game.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {game.name}
              </button>
            ))}
          </div>

          {/* Time Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {timeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setTimeFilter(filter.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  timeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex justify-center items-end space-x-8">
            {filteredLeaderboard.slice(0, 3).map((player, index) => {
              const positions = [1, 0, 2]; // 2nd, 1st, 3rd order
              const heights = ['h-48', 'h-56', 'h-40'];
              const actualIndex = positions[index];
              const actualPlayer = filteredLeaderboard[actualIndex];

              return (
                <Link
                  key={actualPlayer.rank}
                  to={`/profile/${actualPlayer.username}`}
                  className="text-center group"
                >
                  <div className={`${heights[index]} bg-gray-800 rounded-xl p-6 flex flex-col justify-end transition-transform group-hover:scale-105`}>
                    <div className="relative">
                      <img
                        src={actualPlayer.avatar}
                        alt={actualPlayer.username}
                        className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-500"
                      />
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center ${getRankColor(actualPlayer.rank)} bg-gray-900`}>
                        <SafeIcon icon={getRankIcon(actualPlayer.rank)} className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{actualPlayer.username}</div>
                    <div className="text-purple-400 font-bold mb-2">{actualPlayer.points} pts</div>
                    <div className="text-green-400 text-sm">{actualPlayer.recentGain}</div>
                  </div>
                  <div className="mt-4">
                    <span className={`text-3xl font-bold ${getRankColor(actualPlayer.rank)}`}>
                      #{actualPlayer.rank}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <SafeIcon icon={FiUsers} className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">8,492</div>
            <div className="text-gray-400">Active Players</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <SafeIcon icon={FiTrophy} className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">156</div>
            <div className="text-gray-400">Tournaments</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <SafeIcon icon={FiClock} className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">24h</div>
            <div className="text-gray-400">Updated Every</div>
          </div>
        </motion.div>

        {/* Full Rankings Table */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-750">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Player</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Points</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Wins</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Win Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Recent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredLeaderboard.map((player) => (
                  <motion.tr
                    key={player.rank}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="hover:bg-gray-750 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <SafeIcon
                          icon={getRankIcon(player.rank)}
                          className={`h-6 w-6 mr-2 ${getRankColor(player.rank)}`}
                        />
                        <span className="text-white font-bold">#{player.rank}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/profile/${player.username}`} className="flex items-center group">
                        <img
                          src={player.avatar}
                          alt={player.username}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                            {player.username}
                          </div>
                          <div className="text-sm text-gray-400">{player.country}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-purple-400 font-bold">{player.points}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-400">{player.wins}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-400">{player.winRate}%</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-400">{player.recentGain}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Leaderboard;