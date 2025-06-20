import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useStaticBlog } from '../hooks/useStaticData';

const BlogPostPage = () => {
  const { id } = useParams();
  const { getPostById } = useStaticBlog();
  
  const post = getPostById(id!);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Article non trouvé
          </h1>
          <p className="text-gray-600 mb-8">
            L'article que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour au blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded">
                {post.category}
              </span>
              <div className="flex items-center ml-4 text-gray-500">
                <Calendar size={16} className="mr-2" />
                {new Date(post.createdAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
          </div>

          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.slice(2, -2)}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-700 mb-2">
                    {paragraph.slice(2)}
                  </li>
                );
              }
              if (paragraph.trim() === '') {
                return <br key={index} />;
              }
              return (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User size={20} className="text-gray-400 mr-2" />
                <span className="text-gray-600">Agde Moto Gattuso</span>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
              >
                Voir tous les articles
                <ArrowLeft size={16} className="ml-1 rotate-180" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;