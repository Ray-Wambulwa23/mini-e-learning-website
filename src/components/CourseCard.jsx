import React from 'react';
import Card from './common/card';

const CourseCard = ({ course, onClick }) => {
    const lessonCount = course.lessons ? course.lessons.length : 0;

    return (
        <Card className="course-card" onClick={() => onClick(course.id)}>
            <h3 className='course-title'>{course.title}</h3>
            <p className='course-description'>{course.description}</p>
            <div className='course-meta'>
                <span className='lesson-count'>📚 {lessonCount} lessons</span>
            </div>
        </Card>
    );
};

export default CourseCard;