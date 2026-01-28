export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 bg-clip-text text-transparent mb-6">
              CultureVerse
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Explore, Share, and Celebrate World Cultures
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              A digital platform connecting traditions, arts, languages, and stories from every corner of the globe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Start Exploring 🌍
              </button>
              <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold text-lg hover:shadow-xl transition-all border-2 border-gray-200">
                Share Your Culture ✨
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🎭</div>
        <div className="absolute top-40 right-20 text-6xl animate-bounce delay-100">🎨</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-bounce delay-200">🎵</div>
        <div className="absolute bottom-40 right-10 text-6xl animate-bounce delay-300">🍜</div>
      </section>

      {/* Interactive Map Preview */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore the World 🗺️
            </h2>
            <p className="text-xl text-gray-600">
              Click any country to discover its unique culture, traditions, and stories
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 shadow-2xl">
            <div className="aspect-video bg-white/80 rounded-2xl flex items-center justify-center border-4 border-dashed border-gray-300">
              <div className="text-center">
                <div className="text-8xl mb-4">🌏</div>
                <p className="text-2xl font-semibold text-gray-700">Interactive World Map</p>
                <p className="text-gray-600 mt-2">Coming Soon: Click & Explore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600">
              Technology meets tradition in the most beautiful way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Video & Photo Galleries</h3>
              <p className="text-gray-600">
                Watch traditional dances, festivals, and ceremonies from around the world
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🗣️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Learn Languages</h3>
              <p className="text-gray-600">
                Pick up greetings, phrases, and slang from different cultures
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cultural Stories</h3>
              <p className="text-gray-600">
                Hear myths, legends, and history from local storytellers
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cultural Challenges</h3>
              <p className="text-gray-600">
                Try a dance, recipe, or greeting and share your version
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Digital Museum</h3>
              <p className="text-gray-600">
                Explore 3D temples, artifacts, and art in AR/VR
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Locals upload authentic content from their own cultures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Cultures 🌟
            </h2>
            <p className="text-xl text-gray-600">
              Discover amazing traditions from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Culture Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center text-7xl">
                🎌
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Japanese Tea Ceremony</h3>
                <p className="text-gray-600 text-sm">Ancient ritual of harmony and respect</p>
              </div>
            </div>

            {/* Culture Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-7xl">
                🦁
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maasai Warriors</h3>
                <p className="text-gray-600 text-sm">Traditional jumping dance and culture</p>
              </div>
            </div>

            {/* Culture Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-red-400 flex items-center justify-center text-7xl">
                💃
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spanish Flamenco</h3>
                <p className="text-gray-600 text-sm">Passionate dance and guitar music</p>
              </div>
            </div>

            {/* Culture Card 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-7xl">
                🪔
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Indian Diwali</h3>
                <p className="text-gray-600 text-sm">Festival of lights and celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            &ldquo;We&rsquo;re using technology to celebrate what makes us human — our stories, our art, and our heritage.
            CultureVerse preserves dying traditions, connects global communities, and gives every culture a voice.&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <span className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full">🧠 Education</span>
            <span className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full">🌐 Connection</span>
            <span className="px-6 py-3 bg-orange-100 text-orange-700 rounded-full">🎨 Preservation</span>
            <span className="px-6 py-3 bg-green-100 text-green-700 rounded-full">👥 Inclusivity</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Explore the World?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands discovering and sharing cultures from every corner of the globe
          </p>
          <button className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105">
            Get Started Free 🚀
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold mb-2">CultureVerse</p>
          <p className="text-gray-400">Celebrating humanity, one culture at a time</p>
          <p className="text-gray-500 text-sm mt-4">© 2026 CultureVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
