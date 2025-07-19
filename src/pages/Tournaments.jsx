import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const { FiTrophy, FiUsers, FiCalendar, FiClock, FiDollarSign, FiGamepad2, FiFilter } = FiIcons;

const Tournaments = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState('all');

  const tournaments = [
    {
      id: 1,
      name: 'Spring Championship',
      game: 'Valorant',
      status: 'live',
      participants: 128,
      maxParticipants: 128,
      prize: '$5,000',
      startDate: '2024-03-15',
      endDate: '2024-03-20',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
      description: 'The ultimate Valorant championship with the best teams competing for glory.'
    },
    {
      id: 2,
      name: 'Rocket League Masters',
      game: 'Rocket League',
      status: 'upcoming',
      participants: 45,
      maxParticipants: 64,
      prize: '$3,000',
      startDate: '2024-03-25',
      endDate: '2024-03-28',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
      description: 'Fast-paced action and incredible saves in this Rocket League tournament.'
    },
    {
      id: 3,
      name: 'CS2 Pro League',
      game: 'Counter-Strike 2',
      status: 'upcoming',
      participants: 32,
      maxParticipants: 32,
      prize: '$10,000',
      startDate: '2024-04-01',
      endDate: '2024-04-07',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400',
      description: 'Professional Counter-Strike 2 competition with the highest stakes.'
    },
    {
      id: 4,
      name: 'Fighting Game Festival',
      game: 'Street Fighter 6',
      status: 'completed',
      participants: 96,
      maxParticipants: 96,
      prize: '$2,500',
      startDate: '2024-02-10',
      endDate: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400',
      description: 'The best fighters from around the world battled it out.'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'bg-red-500';
      case 'upcoming': return 'bg-green-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'live': return 'Live Now';
      case 'upcoming': return 'Upcoming';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  const filteredTournaments = tournaments.filter(tournament => {
    if (filter === 'all') return true;
    return tournament.status === filter;
  });

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
            <SafeIcon icon={FiTrophy} className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tournaments</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Compete in exciting tournaments and prove your skills against the best players
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {['all', 'live', 'upcoming', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === status
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {status === 'all' ? 'All Tournaments' : getStatusText(status)}
            </button>
          ))}
        </motion.div>

        {/* Tournaments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors group"
            >
              <div className="relative">
                <img
                  src={tournament.image}
                  alt={tournament.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(tournament.status)}`}>
                    {getStatusText(tournament.status)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-lg p-2">
                  <SafeIcon icon={FiGamepad2} className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{tournament.game}</p>
                <p className="text-gray-400 text-sm mb-4">{tournament.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <SafeIcon icon={FiUsers} className="h-4 w-4 mr-2" />
                      <span>{tournament.participants}/{tournament.maxParticipants} Players</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <SafeIcon icon={FiDollarSign} className="h-4 w-4 mr-1" />
                      <span>{tournament.prize}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-400">
                    <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2" />
                    <span>{tournament.startDate} - {tournament.endDate}</span>
                  </div>

                  {tournament.status === 'upcoming' && user && (
                    <button className="w-full mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                      Join Tournament
                    </button>
                  )}

                  {tournament.status === 'live' && (
                    <button className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors">
                      Watch Live
                    </button>
                  )}

                  {tournament.status === 'completed' && (
                    <button className="w-full mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors">
                      View Results
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Create Tournament CTA */}
        {user && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Host Your Own Tournament</h3>
              <p className="text-purple-100 mb-6">
                Create and manage your own gaming tournaments with our easy-to-use tools
              </p>
              <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Create Tournament
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Tournaments;