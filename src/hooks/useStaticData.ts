import { useState, useEffect } from 'react';
import { 
  staticMotorcycles, 
  staticParts, 
  staticBlogPosts, 
  staticPartCategories, 
  staticBlogCategories 
} from '../data/staticData';
import { Motorcycle } from '../types/Motorcycle';
import { Part } from '../types/Part';

// Hook pour gérer les données statiques avec localStorage
export const useStaticMotorcycles = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Charger depuis localStorage ou utiliser les données par défaut
    const stored = localStorage.getItem('agde-moto-motorcycles');
    if (stored) {
      setMotorcycles(JSON.parse(stored));
    } else {
      setMotorcycles(staticMotorcycles);
      localStorage.setItem('agde-moto-motorcycles', JSON.stringify(staticMotorcycles));
    }
    setIsLoading(false);
  }, []);

  const updateMotorcycles = (newMotorcycles: Motorcycle[]) => {
    setMotorcycles(newMotorcycles);
    localStorage.setItem('agde-moto-motorcycles', JSON.stringify(newMotorcycles));
  };

  const addMotorcycle = (motorcycle: Omit<Motorcycle, 'id' | 'createdAt'>) => {
    const newMotorcycle: Motorcycle = {
      ...motorcycle,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updated = [...motorcycles, newMotorcycle];
    updateMotorcycles(updated);
    return newMotorcycle;
  };

  const updateMotorcycle = (id: string, updates: Partial<Motorcycle>) => {
    const updated = motorcycles.map(m => m.id === id ? { ...m, ...updates } : m);
    updateMotorcycles(updated);
  };

  const deleteMotorcycle = (id: string) => {
    const updated = motorcycles.filter(m => m.id !== id);
    updateMotorcycles(updated);
  };

  const getMotorcycleById = (id: string) => {
    return motorcycles.find(m => m.id === id);
  };

  const getFeaturedMotorcycles = () => {
    return motorcycles.filter(m => m.isFeatured);
  };

  return {
    data: motorcycles,
    isLoading,
    error: null,
    addMotorcycle,
    updateMotorcycle,
    deleteMotorcycle,
    getMotorcycleById,
    getFeaturedMotorcycles
  };
};

export const useStaticParts = () => {
  const [parts, setParts] = useState<Part[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('agde-moto-parts');
    if (stored) {
      setParts(JSON.parse(stored));
    } else {
      setParts(staticParts);
      localStorage.setItem('agde-moto-parts', JSON.stringify(staticParts));
    }
    setIsLoading(false);
  }, []);

  const updateParts = (newParts: Part[]) => {
    setParts(newParts);
    localStorage.setItem('agde-moto-parts', JSON.stringify(newParts));
  };

  const addPart = (part: Omit<Part, 'id' | 'createdAt'>) => {
    const newPart: Part = {
      ...part,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updated = [...parts, newPart];
    updateParts(updated);
    return newPart;
  };

  const updatePart = (id: string, updates: Partial<Part>) => {
    const updated = parts.map(p => p.id === id ? { ...p, ...updates } : p);
    updateParts(updated);
  };

  const deletePart = (id: string) => {
    const updated = parts.filter(p => p.id !== id);
    updateParts(updated);
  };

  const getPartById = (id: string) => {
    return parts.find(p => p.id === id);
  };

  const getFeaturedParts = () => {
    return parts.filter(p => p.isFeatured && p.isAvailable);
  };

  return {
    data: parts,
    isLoading,
    error: null,
    addPart,
    updatePart,
    deletePart,
    getPartById,
    getFeaturedParts
  };
};

export const useStaticBlog = () => {
  const [posts, setPosts] = useState(staticBlogPosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('agde-moto-blog');
    if (stored) {
      setPosts(JSON.parse(stored));
    } else {
      setPosts(staticBlogPosts);
      localStorage.setItem('agde-moto-blog', JSON.stringify(staticBlogPosts));
    }
    setIsLoading(false);
  }, []);

  const updatePosts = (newPosts: any[]) => {
    setPosts(newPosts);
    localStorage.setItem('agde-moto-blog', JSON.stringify(newPosts));
  };

  const addPost = (post: any) => {
    const newPost = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updated = [...posts, newPost];
    updatePosts(updated);
    return newPost;
  };

  const updatePost = (id: string, updates: any) => {
    const updated = posts.map(p => p.id === id ? { ...p, ...updates } : p);
    updatePosts(updated);
  };

  const deletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    updatePosts(updated);
  };

  const getPostById = (id: string) => {
    return posts.find(p => p.id === id);
  };

  return {
    data: posts,
    isLoading,
    error: null,
    addPost,
    updatePost,
    deletePost,
    getPostById
  };
};

export const useStaticCategories = () => {
  return {
    partCategories: staticPartCategories,
    blogCategories: staticBlogCategories
  };
};