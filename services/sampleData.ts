import { VideoItem, VideoCategory, Review } from '../types';

export const LIBRARY_VERSION = 502;

/**
 * BASE LIBRARY DATA
 * Populated with high-quality sample signals to ensure persistence in source code.
 */
const INITIAL_VIDEO_DATA: any[] = [
  {
    id: 'v1',
    prompt: "Golden Hour Serenity - Cinematic Nature",
    category: 'Meditation',
    url: '6p_S7P_n8iE',
    thumbnail: 'https://img.youtube.com/vi/6p_S7P_n8iE/mqdefault.jpg'
  },
  {
    id: 'v2',
    prompt: "Midnight Snowfall Ambience",
    category: 'Integral Serenity',
    url: 'CHSnz0DQw68',
    thumbnail: 'https://img.youtube.com/vi/CHSnz0DQw68/mqdefault.jpg'
  },
  {
    id: 'v3',
    prompt: "Deep Space Visual Journey",
    category: 'Other',
    url: 'LXO-jKksQkM',
    thumbnail: 'https://img.youtube.com/vi/LXO-jKksQkM/mqdefault.jpg'
  },
  {
    id: 'v4',
    prompt: "Ocean Waves 4K - Pacific Coast",
    category: 'Meditation',
    url: 'nep76m-M-U0',
    thumbnail: 'https://img.youtube.com/vi/nep76m-M-U0/mqdefault.jpg'
  },
  {
    id: 'v5',
    prompt: "Tropical Forest Soundscape",
    category: 'Permia Community',
    url: '8_z7pM275X8',
    thumbnail: 'https://img.youtube.com/vi/8_z7pM275X8/mqdefault.jpg'
  }
];

export const getSampleLibrary = (): VideoItem[] => {
  return INITIAL_VIDEO_DATA.map((item, idx) => ({
    ...item,
    timestamp: Date.now() - (idx * 100000),
    status: 'ready',
    viewCount: Math.floor(Math.random() * 5000) + 100,
    likeCount: Math.floor(Math.random() * 500) + 20,
    dislikeCount: Math.floor(Math.random() * 50),
    rating: 4.5,
    isFavorite: idx < 2, 
    isLiked: false,
    isDisliked: false,
    reviews: [
      {
        id: `r-${idx}-1`,
        user: 'NeuralSystem',
        rating: 5,
        text: 'Optimal signal quality detected. Highly recommended for focus.',
        timestamp: Date.now() - 500000,
        isApproved: true
      }
    ]
  }));
};

export const getSurpriseVideo = (): VideoItem => {
  const pool = ['dQw4w9WgXcQ', 'CHSnz0DQw68', '5Wn4M_9-H9I', 'X_JBFLs3vAk', 'LXO-jKksQkM'];
  const id = pool[Math.floor(Math.random() * pool.length)];
  return {
    id: `surprise-${Date.now()}`,
    prompt: "Neural Surprise Signal",
    category: 'Other',
    url: id,
    timestamp: Date.now(),
    status: 'ready',
    viewCount: 0,
    likeCount: 0,
    dislikeCount: 0,
    rating: 0,
    isFavorite: false,
    isLiked: false,
    isDisliked: false,
    reviews: []
  };
};
