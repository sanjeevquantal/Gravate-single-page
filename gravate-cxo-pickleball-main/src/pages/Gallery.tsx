import GalleryHero from '@/features/gallery/components/GalleryHero';
import InstagramFeed from '@/features/gallery/components/InstagramFeed';
import GalleryFeatures from '@/features/gallery/components/GalleryFeatures';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <GalleryHero />
      <InstagramFeed />
      <GalleryFeatures />
    </div>
  );
};

export default Gallery;