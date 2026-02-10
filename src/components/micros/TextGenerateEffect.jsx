import React, { useEffect, useRef } from 'react';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import cn from '../../utils/cn'

const TextGenerateEffect = ({ words, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    if(isInView){
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.5,
          delay: stagger(0.1),
        }
      );
    }
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className={cn("words", className)}>
      {renderWords()}
    </div>
  );
};

export default TextGenerateEffect;