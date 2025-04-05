import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';

// data
import { EN_description, ZH_description } from '@Data/aboutData';
// components
import CustomImage from '@components/CustomImage';

const variants = {
    onscreen: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    offscreen: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const contentVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 2,
            // spring: 400,
        },
    },
};

const photoVariants = {
    offscreen: {
        x: 200,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 2,
            // spring: 400,
        },
    },
};

function About() {
    const { currentTheme, isDark } = useSelector((state) => state.theme);
    const { currentLanguage, isEN } = useSelector((state) => state.language);
    const [description, setDescription] = useState(EN_description);

    useEffect(() => {
        if (currentLanguage == 'ZH') {
            setDescription(ZH_description);
        } else {
            setDescription(EN_description);
        }
    }, [currentLanguage]);

    return (
        <div className={`sectionArea aboutContainer ${currentTheme}-bg-linear`}>
            <div className='section-container'>
                <h3 id='about' className={`dark-color sectionTitle`}>
                    // {`${isEN ? `ABOUT.` : `關於我`} `}
                </h3>

                <motion.div
                    className='aboutContainer-description'
                    initial='offscreen'
                    whileInView='onscreen'
                    variants={variants}
                    viewport={{ once: true }}
                >
                    <motion.div className='aboutContainer-description-content' variants={variants}>
                        <motion.h1 className={`dark-color`} variants={contentVariants}>
                            {isEN ? `Hi, I’m Fu Ting (Fred). Nice to meet you.` : `嗨，我是李福庭。很高興認識你。`}
                        </motion.h1>

                        {description?.length &&
                            description.map((item, index) => (
                                <motion.p key={index} className={`dark-color`} variants={contentVariants}>
                                    {item}
                                </motion.p>
                            ))}
                    </motion.div>

                    {/* head portrait */}
                    <motion.div
                        variants={photoVariants}
                        viewport={{ once: true }}
                        className='aboutContainer-description-content'
                    >
                        <CustomImage
                            src={`self/me.png`}
                            alt={`Logo`}
                            styles={`content-img`}
                            img2={`self/me.png`}
                            img3={`self/me.png`}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default React.memo(About);
