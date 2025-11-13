import React from "react";
import { Link } from "react-router";

const Banner = () => {

  
  return (
    <div>
      <header className="relative bg-gradient-to from-emerald-50 to-white overflow-hidden">
        {/* Decorative curved background */}
        <div className="absolute inset-x-0 -top-40 pointer-events-none">
          <svg
            className="w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#ECFDF5"
              d="M0,192L48,197.3C96,203,192,213,288,234.7C384,256,480,288,576,288C672,288,768,256,864,234.7C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-emerald-900">
                Share Meal
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-emerald-700 max-w-prose">
                Connect with neighbours to share surplus food, reduce waste, and
                feed those in need. Find available meals near you or list what
                you want to donate.
              </p>

            
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">

                <Link
                  to="/available-foods"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 border border-emerald-600 text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  aria-label="View all foods"
                >
                  View All Foods
                </Link>
              </div>

              
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 bg-white border border-emerald-100 rounded-full px-3 py-1 shadow-sm">
                  <svg
                    className="w-4 h-4 text-emerald-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 2v6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 8v11h14V8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <strong className="text-emerald-900">128</strong> items
                  available nearby
                </span>

                <span className="inline-flex items-center gap-2 bg-white border border-emerald-100 rounded-full px-3 py-1 shadow-sm">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 21s-6-4.35-9-7.5C-1 9 4 3 12 8c8-5 13 1 9 5.5C18 16.65 12 21 12 21z"
                      stroke="currentColor"
                      strokeWidth="0"
                    />
                  </svg>
                  <strong className="text-emerald-900">56</strong> donors today
                </span>
              </div>
            </div>

            
            <div className="relative">
              <div className="mx-auto max-w-md">
                
                <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-emerald-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-emerald-800">
                        Nearby Picks
                      </h3>
                      <p className="text-xs text-emerald-500">
                        Fresh donations waiting
                      </p>
                    </div>
                    <div className="text-sm text-emerald-600">
                      • Updated 5m ago
                    </div>
                  </div>

                  <ul className="mt-4 space-y-3">
                    
                    {[
                      { name: "Rice & Vegetable Curry", tag: "2 plates" },
                      { name: "Homemade Fish Curry", tag: "1 plate" },
                      { name: "Fruit Box (mixed)", tag: "3 boxes" },
                    ].map((it, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="flex-none w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M3 3h18v4H3zM7 11v8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17 11v8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-emerald-900">
                            {it.name}
                          </div>
                          <div className="text-xs text-emerald-500">
                            {it.tag}
                          </div>
                        </div>
                        <div>
                          <button className="text-sm px-3 py-1 rounded-md bg-orange-50 border border-orange-100 text-orange-600 hover:bg-orange-100 focus:outline-none">
                            Request
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                
                <p className="mt-3 text-xs text-emerald-400">
                  Join the table — donate or request in a few clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
