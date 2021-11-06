import { motion } from 'framer-motion';
function TimelineItem({ year, title, icon, description, altText, refs }) {
  return (
    <motion.div className='timeline'>
      <a className='timeline-content'>
        <div className='timeline-year'>{year}</div>
        <h3 className='title'>{title}</h3>
        <div className='timeline-icon'>{icon}</div>
        <p className='description'>
          {description} <br />
          <b>{altText && altText}</b>
        </p>
      </a>
    </motion.div>
  );
}

export default TimelineItem;
