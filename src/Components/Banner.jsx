import React, { use } from "react";
import { Link } from "react-router";
import bannerImage from "/header1.jpg";
import { AuthContext } from "../Authorization/AuthContext";
import Loading from "./Loading";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const Banner = () => {
  const { loading } = use(AuthContext);

  if (loading) return <Loading />;

  return (
    <header className="relative bg-gradient-to from-emerald-50 to-white overflow-hidden">
      {/* Background */}
      <motion.img
        src={bannerImage}
        alt="photo"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-cover blur-xs"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-500"
              variants={fadeUp}
            >
              Share Meal
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl text-emerald-400 max-w-prose"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              Connect with neighbours to share surplus food, reduce waste, and
              feed those in need.
            </motion.p>

            <motion.div
              className="mt-8"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/available-foods"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3
                  border border-emerald-600 bg-linear-to-r from-orange-500 to-red-600
                  text-white shadow-lg"
                >
                  View All Foods
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto max-w-md bg-white rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-sm font-semibold text-emerald-800">
                Nearby Picks
              </h3>

              <ul className="mt-4 space-y-3">
                {[
                  "Rice & Vegetable Curry",
                  "Homemade Fish Curry",
                  "Fruit Box (mixed)",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="text-sm text-emerald-700"
                  >
                    🍽 {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </header>
  );
};

export default Banner;
