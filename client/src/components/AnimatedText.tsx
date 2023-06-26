import { motion } from "framer-motion";

interface Props {
  text: string;
}
const AnimatedText = ({ text }: Props) => {
  return (
    <div>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
