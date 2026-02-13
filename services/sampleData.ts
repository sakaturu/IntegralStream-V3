import { VideoItem, VideoCategory, Review } from '../types';

/**
 * LIBRARY_VERSION 4180: Synced with deployment metadata.
 */
export const LIBRARY_VERSION = 4180;

/**
 * BASE LIBRARY DATA
 * A high-end cinematic playlist designed for a world-class experience.
 */
const INITIAL_VIDEO_DATA: any[] = [
  // Cinematic / Meditation
  {
    "id": "v-cin-001",
    "prompt": "Celestial Horizons - 8K Cinematic Universe",
    "category": "Meditation",
    "url": "njX2bu-_Vw4",
    "thumbnail": "https://img.youtube.com/vi/njX2bu-_Vw4/mqdefault.jpg"
  },
  // Integral Serenity
  {
    "id": "v-int-001",
    "prompt": "Sacred Geometry: The Tree of Life (4K)",
    "category": "Integral Serenity",
    "url": "-WlazEoSDLY",
    "thumbnail": "https://img.youtube.com/vi/-WlazEoSDLY/mqdefault.jpg"
  },
  {
    "id": "v-int-002",
    "prompt": "Ken Wilber: The Integral Vision",
    "category": "Integral Serenity",
    "url": "pESW6LOmVLU",
    "thumbnail": "https://img.youtube.com/vi/pESW6LOmVLU/mqdefault.jpg"
  },
  // Permia Community
  {
    "id": "v-permia-001",
    "prompt": "Dome Architecture",
    "category": "Permia Community",
    "url": "CFuwwO9XgQA",
    "thumbnail": "https://img.youtube.com/vi/CFuwwO9XgQA/mqdefault.jpg"
  },
  {
    "id": "v-permia-002",
    "prompt": "Permia Community - Neural Living Framework",
    "category": "Permia Community",
    "url": "0jxDFgNmRPg",
    "thumbnail": "https://img.youtube.com/vi/0jxDFgNmRPg/mqdefault.jpg"
  },
  {
    "id": "v-permia-003",
    "prompt": "Permia Community - Earthship & Off-Grid Living",
    "category": "Permia Community",
    "url": "BxDtPJgK7WE",
    "thumbnail": "https://img.youtube.com/vi/BxDtPJgK7WE/mqdefault.jpg"
  },
  {
    "id": "v-permia-004",
    "prompt": "Permia Community - Sustainable Living & Architecture",
    "category": "Permia Community",
    "url": "e-i5S4AbgpA",
    "thumbnail": "https://img.youtube.com/vi/e-i5S4AbgpA/mqdefault.jpg"
  },
  {
    "id": "v-permia-005",
    "prompt": "Permia Community - Collective Intelligence & Future Models",
    "category": "Permia Community",
    "url": "2jBiBvFH5sc",
    "thumbnail": "https://img.youtube.com/vi/2jBiBvFH5sc/mqdefault.jpg"
  },
  // Environment
  {
    "id": "v-env-001",
    "prompt": "Emerald Forest - Deep Nature Ambience",
    "category": "Environment",
    "url": "_5aA54MD4ho",
    "thumbnail": "https://img.youtube.com/vi/_5aA54MD4ho/mqdefault.jpg"
  },
  // Spanish
  {
    "id": "v-span-001",
    "prompt": "Meditación Guiada - Relajación Profunda",
    "category": "Spanish",
    "url": "MqHhPApGM0Q",
    "thumbnail": "https://img.youtube.com/vi/MqHhPApGM0Q/mqdefault.jpg"
  }
];

export const getSampleLibrary = (): VideoItem[] => {
  return INITIAL_VIDEO_DATA.map((item, idx) => ({
    ...item,
    timestamp: Date.now() - (idx * 100000),
    status: 'ready',
    viewCount: 0,
    likeCount: 0,
    dislikeCount: 0,
    rating: 0,
    isFavorite: false, 
    isLiked: false,
    isDisliked: false,
    reviews: []
  }));
};

export const getSurpriseVideo = (): VideoItem => {
  const pool = ['dQw4w9WgXcQ', 'CHSnz0DQw68', '5Wn4M_9-H9I', 'X_JBFLs3vAk', 'LXO-jKksQkM'];
  const id = pool[Math.floor(Math.random() * pool.length)];
  return {
    id: `surprise-${Date.now()}`,
    prompt: "Neural Surprise Signal",
    category: 'Fav. Pick',
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