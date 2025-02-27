/* eslint-disable no-unused-vars */
import { BookOpen } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section 
            id="education" 
            className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 py-32 px-4 sm:px-6 lg:px-8"
        >
            <motion.div 
                className='max-w-7xl mx-auto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h2 
                    className='text-4xl md:text-5xl font-bold text-white mb-16 text-center'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Education & <span className='text-purple-400'>Certifications</span>
                </motion.h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {[{
                        type: "Degree", title: "Bachelors(Hons.) in Computer Science with AI", place: "Birmingham City University", year: "2024"
                    }].map((item, index) => (
                        <motion.div 
                            key={item.title}
                            className='bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300'
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className='flex items-start gap-4'>
                                <div className='p-3 bg-purple-500/20 rounded-lg'>
                                    <BookOpen className='w-6 h-6 text-purple-400'/>
                                </div>
                                <div>
                                    <span className='text-purple-400 text-sm'>{item.type}</span>
                                    <h3 className='text-xl font-semibold text-white mt-1'>{item.title}</h3>
                                    <p className='text-slate-300 mt-2'>{item.place}</p>
                                    <p className='text-slate-400 mt-1'>{item.year}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Education;