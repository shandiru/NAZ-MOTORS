export default function GallerySection() {
  // Put all online image URLs here
  const images = [
    // FIRST 2 (BIG)
    "https://autohub.blob.core.windows.net/b1a14add.../renault-big1.jpg",
    "https://autohub.blob.core.windows.net/b1a14add.../renault-big2.jpg",

    // SMALL THUMBNAILS
    "https://autohub.blob.core.windows.net/b1a14add.../renault-sm1.jpg",
    "https://autohub.blob.core.windows.net/b1a14add.../renault-sm2.jpg",
    "https://autohub.blob.core.windows.net/b1a14add.../renault-sm3.jpg",
    "https://autohub.blob.core.windows.net/b1a14add.../renault-sm4.jpg",
    "https://autohub.blob.core.windows.net/b1a14add.../renault-sm5.jpg",
    "https://autohub.blob.core.windows.net/b1a14add.../renault-sm6.jpg",
    // Add all images you need…
  ];

  if (images.length < 3) return null;

  const big = images.slice(0, 2);
  const thumbs = images.slice(2);

  return (
    <section
      id="Gallery"
      className="py-6 md:py-10 bg-gradient-to-b from-[#1e1e1e] to-[#0f0f0f] rounded-b-3xl overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">

        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-6">
          Photo Gallery
        </h2>

        {/* TWO BIG IMAGES */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {big.map((url, index) => (
            <div key={index} className="w-full">
              <img
                src={url}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* SMALL IMAGES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-2">
          {thumbs.map((url, index) => (
            <div key={index} className="w-full">
              <img
                src={url}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[90px] md:text-[140px] font-extrabold text-white/10 pointer-events-none select-none">
        Gallery
      </div>
    </section>
  );
}
