import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transitionEnd: { display: "none" }
                }}
                exit={{
                    opacity: 1,
                    display: "block"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 z-[9999] bg-white pointer-events-none"
            />
            {children}
        </>
    );
};

export default PageTransition;
