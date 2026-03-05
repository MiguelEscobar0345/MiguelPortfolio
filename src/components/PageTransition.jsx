import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 0 }}
        exit={{ scale: 40 }}
        transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
        className="fixed inset-0 bg-black rounded-full origin-center z-[999]"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}