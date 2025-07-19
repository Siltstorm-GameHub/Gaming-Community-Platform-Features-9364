import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiCalendar, FiUser, FiClock, FiTag, FiShare2, FiHeart, FiMessageCircle } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data (in a real app, this would come from an API)
  const blogPost = {
    id: 1,
    title: 'The Ultimate Guide to Competitive Gaming',
    excerpt: 'Master the fundamentals of competitive gaming with our comprehensive guide covering strategy, mindset, and technical skills.',
    content: `
      <h2>Introduction to Competitive Gaming</h2>
      <p>Competitive gaming has evolved from a niche hobby into a global phenomenon that attracts millions of viewers and offers substantial prize pools. Whether you're just starting your journey or looking to take your skills to the next level, this comprehensive guide will provide you with the fundamental knowledge needed to succeed in the competitive gaming arena.</p>
      
      <h2>Building the Right Mindset</h2>
      <p>The mental aspect of competitive gaming is often overlooked but is crucial for long-term success. Professional players understand that maintaining a positive mindset, dealing with pressure, and learning from defeats are essential skills that separate good players from great ones.</p>
      
      <h3>Key Mental Strategies:</h3>
      <ul>
        <li><strong>Stay Focused:</strong> Eliminate distractions during practice and competition</li>
        <li><strong>Learn from Losses:</strong> Every defeat is an opportunity to improve</li>
        <li><strong>Manage Tilt:</strong> Develop techniques to stay calm under pressure</li>
        <li><strong>Set Goals:</strong> Establish both short-term and long-term objectives</li>
      </ul>
      
      <h2>Technical Skills Development</h2>
      <p>While mindset is important, technical skills form the foundation of competitive gaming. This includes everything from basic mechanics to advanced strategies specific to your chosen game.</p>
      
      <h3>Essential Technical Areas:</h3>
      <ul>
        <li><strong>Aim Training:</strong> Consistent practice with aim trainers and in-game drills</li>
        <li><strong>Game Sense:</strong> Understanding map control, timing, and positioning</li>
        <li><strong>Communication:</strong> Clear and effective team communication</li>
        <li><strong>Adaptability:</strong> Adjusting strategies based on opponents and situations</li>
      </ul>
      
      <h2>Building Your Practice Routine</h2>
      <p>Consistent practice is the key to improvement in competitive gaming. Develop a structured routine that includes warm-ups, focused skill practice, gameplay sessions, and review periods.</p>
      
      <h3>Sample Daily Routine:</h3>
      <ol>
        <li><strong>Warm-up (15-20 minutes):</strong> Basic aim training and movement exercises</li>
        <li><strong>Skill Practice (30-45 minutes):</strong> Focus on specific weaknesses</li>
        <li><strong>Gameplay (2-3 hours):</strong> Ranked matches or scrimmages</li>
        <li><strong>Review (20-30 minutes):</strong> Analyze replays and identify areas for improvement</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Success in competitive gaming requires dedication, consistent practice, and the right mindset. Remember that improvement takes time, and every professional player started where you are now. Focus on gradual improvement, learn from the community, and most importantly, enjoy the journey.</p>
    `,
    author: 'ProGamer',
    date: '2024-03-10',
    category: 'guides',
    tags: ['strategy', 'competitive', 'tips', 'gaming'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    readTime: '8 min read',
    likes: 342,
    comments: 28
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Building the Perfect Gaming Setup',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300',
      date: '2024-03-05'
    },
    {
      id: 3,
      title: 'Esports Psychology: Mental Game Mastery',
      image: 'https://images.unsplash.com/photo-1538481199464-7160b19dc94b?w=300',
      date: '2024-03-01'
    },
    {
      id: 4,
      title: 'Major Tournament Announcements for 2024',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=300',
      date: '2024-03-08'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 py-8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
          >
            <SafeIcon icon={FiArrowLeft} className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800 rounded-xl overflow-hidden"
        >
          {/* Hero Image */}
          <div className="relative h-64 md:h-96">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Title and Meta */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {blogPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                <div className="flex items-center">
                  <SafeIcon icon={FiUser} className="h-4 w-4 mr-2" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiClock} className="h-4 w-4 mr-2" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                  >
                    <SafeIcon icon={FiTag} className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-4 pb-6 border-b border-gray-700">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                  <SafeIcon icon={FiHeart} className="h-4 w-4" />
                  <span>{blogPost.likes}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                  <SafeIcon icon={FiMessageCircle} className="h-4 w-4" />
                  <span>{blogPost.comments}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                  <SafeIcon icon={FiShare2} className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </header>

            {/* Article Body */}
            <div 
              className="prose prose-invert prose-purple max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              style={{
                color: '#d1d5db',
                lineHeight: '1.7'
              }}
            />
          </div>
        </motion.article>

        {/* Related Posts */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="block group">
                  <article className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h3 className="text-white font-medium mb-2 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <SafeIcon icon={FiCalendar} className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
          <p className="text-purple-100 mb-6">
            Subscribe to our newsletter for more gaming insights and exclusive content
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

export default BlogPost;