import { motion } from "framer-motion";

export default function Home() { 
  const fadeLeft = { 
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };
 
  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Premium Car Rental In New York
            </h1>
            <p className="text-gray-600 text-lg">
              Discover the ultimate car rental experience in New York with
              <span className="font-semibold text-blue-600">
                {" "}
                Premium Car Rental.
              </span>
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition">
              <i className="ri-apple-fill"></i> Download App
            </button>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/header.png"
              alt="header"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/about.png"
            alt="about"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h3 className="text-blue-600 font-semibold">
            CONVENIENT INTERACTION
          </h3>
          <h2 className="text-3xl font-bold">Modern App</h2>
          <p className="text-gray-600 leading-relaxed">
            We redefine the car rental experience with our commitment to quality
            and luxury.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With easy booking, competitive pricing, and dedicated support, every
            journey is effortless.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition">
            <i className="ri-apple-fill"></i> Download App
          </button>
        </motion.div>
      </section>

      {/* Fleet Section */}
      <section id="car" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-blue-600 font-semibold">ONLY THE BEST CARS</h3>
          <h2 className="text-3xl font-bold mb-8">Our Vehicle Fleet</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
              <motion.img
                key={i}
                src={`/assets/fleet-${i + 1}.jpg`}
                alt="fleet"
                className="rounded-xl shadow hover:scale-105 transition duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="feature"
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h3 className="text-blue-600 font-semibold">BEST FEATURES</h3>
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "ri-bank-card-line", title: "Flexible Payment Plans" },
            { icon: "ri-customer-service-2-line", title: "Roadside Assistance" },
            { icon: "ri-roadster-line", title: "Your Choice Of Mechanic" },
            { icon: "ri-award-line", title: "Extended Auto Warranties" },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl shadow hover:shadow-lg bg-white"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl text-blue-600">
                <i className={f.icon}></i>
              </span>
              <h4 className="mt-4 font-semibold">{f.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

     <section id="help" className="bg-black text-white py-20 text-center rounded-3xl mx-4 md:mx-10">
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold mb-4"
  >
    Drive With Unique Today
  </motion.h2>
  <motion.p
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="max-w-2xl mx-auto mb-8 text-lg"
  >
    Stand out on the road with our exclusive range of luxury vehicles.
  </motion.p>
  <motion.button
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2 mx-auto hover:bg-gray-200 transition"
  >
    <i className="ri-apple-fill"></i> Download App
  </motion.button>
</section>

    </div>
  );
}
