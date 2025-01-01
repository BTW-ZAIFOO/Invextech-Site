import React from "react";
import { motion } from "framer-motion";
import assets from "../../assets/assets";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <>
      {/* Header Section */}
      <div className="max-w-[1120px] mx-auto mt-16 py-10">
        <div className="text-center items-center">
          <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-6">
            <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
              SERVICES WE PROVIDE
            </span>
          </h2>
          <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 text-3xl md:text-2xl">
            Custom Software Development
          </h3>
        </div>
      </div>

      {/* Service Items */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServiceItem
          image={assets.images_1}
          altText="E-Commerce"
          title="E-Commerce Development"
          description="We create reliable and scalable e-commerce websites to help businesses sell their products to customers all over the world. Our platforms make it easy to manage product listings, process payments securely, and provide a smooth shopping experience for users. We focus on making transactions simple and efficient, ensuring that your customers enjoy shopping, which leads to better sales and higher profits."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServiceItem
          image={assets.images_2}
          altText="App Development"
          title="Mobile App Development"
          description="We specialize in developing mobile apps for both iOS and Android devices. Our team collaborates with you to design and build apps that are easy to use, visually appealing, and tailored to your business goals. Whether it's improving customer engagement or meeting specific business requirements, we create innovative solutions to help your app stand out and succeed."
          reverse
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ServiceItem
          image={assets.images_3}
          altText="Web Development"
          title="Web Development"
          description="We create high-performance websites designed to meet your business goals. Our expertise includes responsive designs that work perfectly on any device, SEO strategies to improve your online visibility, and smooth integration of all necessary features. We focus on building websites that attract visitors, keep them engaged, and turn them into loyal customers."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ServiceItem
          image={assets.images_4}
          altText="WordPress Solutions"
          title="WordPress Solutions"
          description="Unlock the potential of WordPress with our reliable and scalable solutions. Whether you need tailored themes, powerful plugins, or app hosting, we ensure your site is optimized for top performance, high availability, and cost efficiency."
          reverse
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServiceItem
          image={assets.images_5}
          altText="Blockchain Development"
          title="Blockchain Development"
          description="Expand your business with advanced blockchain technology. We provide customized blockchain solutions that improve transparency, strengthen security, and boost efficiency."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ServiceItem
          image={assets.development_img}
          altText="SEO Solutions"
          title="SEO Solutions"
          description="Boost your online presence with our customized SEO strategies. We handle everything from keyword research to on-page optimization, ensuring your website ranks higher on search engines"
          reverse
        />
      </motion.div>
    </>
  );
}

export default Services;
