import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { useStaticBlog, useStaticCategories } from '../hooks/useStaticData';

const BlogPage = () => {
  const { data: posts, isLoading } = useStaticBlog();
  const { blogCategories } = useStaticCategories();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  const publishedPosts = posts.filter(post => post.isPublished);

  return (
    <div>
      <HeroSection
        title="Blog Moto"
        subtitle="Actualités, conseils et passion moto"
        backgroundImage="https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Derniers Articles"
            subtitle="Restez informé des dernières actualités et conseils moto"
          />

          {publishedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Link to={`/blog/${post.id}`}>
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center ml-auto text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.content.substring(0, 150)}...
                    </p>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                    >
                      Lire la suite
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Aucun article publié pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Catégories"
            subtitle="Explorez nos articles par thématique"
            center
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {blogCategories.map((category) => {
              const categoryPosts = publishedPosts.filter(post => post.category === category.name);
              return (
                <div key={category.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {categoryPosts.length} article{categoryPosts.length > 1 ? 's' : ''}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;