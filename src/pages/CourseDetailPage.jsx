import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getCourseById} from '../services/courseService';
import {getCompletedLessons} from '../services/progressService';
import LessonList from '../components/LessonList';
import Button from '../components/common/buttons';


const CourseDetailPage = () => {

  const [detail, setDetail] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const {courseId} = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    const courseData = getCourseById(courseId);
    setDetail(courseData);
    const completed = getCompletedLessons();
    setCompletedLessons(completed);
  }, [courseId]);

  const handleLessonClick = (lessonId) => {
    navigate(`/courses/${courseId}/lessons/${lessonId}`);
  };

  if (!detail) {
    return (
      <div className='loading-container'>
        <div className='loading-spinner'></div>
        <p className='loading-text'>Loading course...</p>
      </div>
    );
  }

  return (
    <div className='course-detail-page fade-in'>
      <Button variant="secondary" onClick={() => navigate('/')}>
        Back to courses
        </Button>

        <h1>{detail.title}</h1>
        <p>{detail.description}</p>

        <h2>Lessons</h2>
        <LessonList
          lessons= {detail.lessons}
          completedLessonsIds={completedLessons}
          onLessonClick={handleLessonClick}
        />
    </div>
  );
};

export default CourseDetailPage;
