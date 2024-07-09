import React from "react";

export const New = () => {
  return (
    <div className="hero w-full h-[100vh] flex flex-col" id="new">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-[2em] w-3/5">
        <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Explore Our <span className="font-cursive">Latest Collection</span>{" "}
            For You
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff7%2Fab%2F46%2Ff7ab4648940cddc552b74924637ee7ae.jpg&f=1&nofb=1&ipt=939ad3fd47f0f3590e53562f6cf24419a44eaad7a68f9e205b3bac9e24175bd9&ipo=images"
              loading="lazy"
              alt="Collection For Couples"
              className="absolute inset-0 h-full w-full object-cover object-left-top transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="relative ml-4 mb-3 text-white md:ml-5">
              <h2 className="text-lg font-semibold">Collection For Couples</h2>
              <p className="text-sm">
                Our Collection for Couple Features coordinated designs and
                patterns, allowing couples to showcase their unity through
                fashion.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe1%2Fc0%2F9d%2Fe1c09d57a0aa792e014fa658a17295a0.jpg&f=1&nofb=1&ipt=07b99ca8a31488a9bf501d42623c64e430b9c95f157d860d57153f4bc9a75964&ipo=images"
              loading="lazy"
              alt="Sheer Bomber Jacket"
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="relative ml-4 mb-3 text-white md:ml-5">
              <h2 className="text-lg font-semibold">Sheer Bomber Jacket</h2>
              <p className="text-sm">
                Introducing our stylish and versatile sheer clerical-caped
                bomber jacket.
              </p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Shop Now
              </button>
            </div>
          </a>
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.moielle.com%2Fwp-content%2Fuploads%2F2013%2F09%2Fvestes-zara.png&f=1&nofb=1&ipt=a94cfd505ab4b29815db617b16245ffbf097b776e9a0401b51ae84989cbd41b5&ipo=images"
              loading="lazy"
              alt="Leather Watch Collection"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="relative ml-4 mb-3 text-white md:ml-5">
              <h2 className="text-lg font-semibold">
                Leather Watch Collection
              </h2>
              <p className="text-sm">
                Discover our premium leather watch collection, blending elegance
                and functionality.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstylecaster.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fzara-fall-boots.gif&f=1&nofb=1&ipt=5d00ae8cd35b816efacef256cd1e10b36009fe43052bbda80597bfa2800a01ec&ipo=images"
              loading="lazy"
              alt="New Tote Bags Collection"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="relative ml-4 mb-3 text-white md:ml-5">
              <h2 className="text-lg font-semibold">
                New Tote Bags Collection
              </h2>
              <p className="text-sm">
                Explore our latest collection of eco-friendly tote bags perfect
                for everyday use.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
