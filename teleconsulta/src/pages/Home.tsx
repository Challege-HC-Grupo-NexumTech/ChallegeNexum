import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h1 className="text-5xl font-bold text-primary mb-4">Ágata — Saúde acessível</h1>
</motion.div>
