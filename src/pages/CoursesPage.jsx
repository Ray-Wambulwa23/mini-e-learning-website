import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { getAllCourses } from '../services/courseService';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const courses = getAllCourses();
    setCourses(courses); 
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className='courses-page'>
      <h1>Available courses</h1>
      <div className='courses-grid'>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => handleCourseClick(course.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
