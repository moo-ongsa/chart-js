import React from "react";

import { motion, type MotionProps } from "framer-motion";

type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;

export const MotionDiv = motion.div as React.FC<MotionDivProps>;
