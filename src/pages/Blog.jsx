import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBookOpen, FiCalendar, FiUser, FiArrowRight, FiSearch, FiTag } = FiIcons;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'guides', name: 'Guides' },
    { id: 'news', name: 'News' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'esports', name: 'Esports' },
    { id: 'community', name: 'Community' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Competitive Gaming',
      excerpt: 'Master the fundamentals of competitive gaming with our comprehensive guide covering strategy, mindset, and technical skills.',
      content: 'Full article content here...',
      author: 'ProGamer',
      date: '2024-03-10',
      category: 'guides',
      tags: ['strategy', 'competitive', 'tips'],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Major Tournament Announcements for 2024',
      excerpt: 'Get ready for the biggest gaming tournaments of the year. Here\'s everything you need to know about upcoming competitions.',
      content: 'Full article content here...',
      author: 'TournamentAdmin',
      date: '2024-03-08',
      category: 'news',
      tags: ['tournaments', 'announcements', '2024'],
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Building the Perfect Gaming Setup',
      excerpt: 'From hardware recommendations to ergonomic considerations, learn how to create a gaming setup that gives you the competitive edge.',
      content: 'Full article content here...',
      author: 'TechExpert',
      date: '2024-03-05',
      category: 'guides',
      tags: ['hardware', 'setup', 'peripherals'],
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Community Spotlight: Rising Stars',
      excerpt: 'Meet the up-and-coming players who are making waves in our community tournaments and climbing the leaderboards.',
      content: 'Full article content here...',
      author: 'CommunityManager',
      date: '2024-03-03',
      category: 'community',
      tags: ['community', 'players', 'spotlight'],
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Esports Psychology: Mental Game Mastery',
      excerpt: 'Discover the psychological strategies used by professional esports athletes to maintain peak performance under pressure.',
      content: 'Full article content here...',
      author: 'SportsPhD',
      date: '2024-03-01',
      category: 'esports',
      tags: ['psychology', 'performance', 'mindset'],
      image: 'https://images.unsplash.com/photo-1538481199464-7160b19dc94b?w=600',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Game Review: Latest Releases Worth Playing',
      excerpt: 'Our comprehensive review of the newest games hitting the competitive scene, with insights on mechanics and competitive viability.',
      content: 'Full article content here...',
      author: 'GameCritic',
      date: '2024-02-28',
      category: 'reviews',
      tags: ['reviews', 'games', 'recommendations'],
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600',
      readTime: '7 min read',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            <SafeIcon icon={FiBookOpen} className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gaming Blog</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest gaming news, strategies, and community insights
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Link to={`/blog/${featuredPost.id}`} className="block group">
              <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                        Featured
                      </span>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-400 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <SafeIcon icon={FiUser} className="h-4 w-4 mr-2" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center text-purple-400 font-medium">
                        Read More
                        <SafeIcon icon={FiArrowRight} className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="block group">
                <article className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors h-full">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-900 bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          <SafeIcon icon={FiTag} className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center">
                        <SafeIcon icon={FiUser} className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <SafeIcon icon={FiCalendar} className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <SafeIcon icon={FiSearch} className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search terms or filter settings.</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-purple-100 mb-6">
            Subscribe to our newsletter for the latest gaming insights and community updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;