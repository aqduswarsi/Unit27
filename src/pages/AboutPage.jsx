function AboutPage() {
  return (
    <div className="bg-white text-black min-h-screen pt-32 px-6 pb-20 dark:bg-black dark:text-white">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl tracking-[12px] leading-[1.6]">
          ABOUT
        </h1>

        <h1 className="text-4xl md:text-6xl tracking-[12px] mt-4">
          UNIT{" "}
          <span className="bg-black text-white dark:bg-white dark:text-black px-5 ml-3 inline-block">
            27
          </span>
        </h1>

        <p className="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mt-6 text-sm tracking-wide">
          THE INDUSTRIAL STANDARD IN DENIM
        </p>

        {/* 🔥 NEW INTRO (ADDED) */}
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6 text-base leading-relaxed">
          <span className="font-medium">Established in 2025</span>, UNIT 27 is a
          denim wear brand based in India. From a strong beginning, the brand is
          steadily growing and building trust through manufacturing, delivering high-quality fabrics and designs. The company
          focuses on jeans, casual wear, and related accessories for men,
          evolving with market trends while ensuring comfort, durability, and
          style.
        </p>
      </div>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
        <img
          src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800"
          className="w-full h-[350px] object-cover rounded-lg shadow-sm"
        />

        <div>
          <h2 className="text-2xl mb-4 tracking-wide font-medium">
            BUILT WITH PRECISION
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            UNIT 27 is built on precision, where every stitch, cut, and finish
            is crafted with intent.
            <br />
            Our denim reflects structure, durability, and a modern aesthetic
            designed for everyday wear.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
        <div>
          <h2 className="text-2xl mb-4 tracking-wide font-medium">
            ENGINEERED FOR COMFORT
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Designed to move with you, UNIT 27 combines strength with
            flexibility.
            <br />
            Our fabrics are selected to deliver breathability, comfort, and
            long-lasting performance without compromise.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800"
          className="w-full h-[350px] object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Section 3 */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl mb-4 tracking-wide font-medium">
          OUR PHILOSOPHY
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          At UNIT 27, denim is more than fabric — it is identity shaped by
          precision and purpose.
          <br />
          We focus on creating pieces that balance durability, comfort, and
          timeless design, built to perform and made to last.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
