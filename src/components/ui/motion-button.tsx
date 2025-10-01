
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

const MotionButton = motion(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <Button ref={ref} {...props} />
  ))
);

MotionButton.displayName = "MotionButton";

export { MotionButton };
