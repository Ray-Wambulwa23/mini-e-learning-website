import React, {useState, useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { getLessonById } from '../services/courseService';
import { markLessonComplete, isLessonComplete } from '../services/progressService';
import { getDiscussionByLesson, addComment } from '../services/discussionService';
import DiscussionThread from '../components/DiscussionThread';
import Button from '../components/common/buttons';

const LessonPage = () => {

  const [lesson, setLesson] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const {courseId, lessonId} = useParams();
  const navigate = useNavigate();

  useEffect(()=> {
    const lessonData = getLessonById(courseId, lessonId);
    setLesson(lessonData);
    const completed = isLessonComplete(lessonId);
    setIsComplete(completed);
    const comments = getDiscussionByLesson(lessonId);
    setDiscussions(comments);
  },[courseId, lessonId])

  const handleMarkComplete = () => {
    markLessonComplete(lessonId);
    setIsComplete(true);
  };

  const handleAddComment = (lessonId, text) => {
    const newComment = addComment(lessonId, text);
    setDiscussions([...discussions, newComment]);
  };

  if(!lesson){
    return <div>Loading...</div>
  }
  return (
    <div className='lesson-page'>
      <Button variant="secondary" onClick= {() => navigate(`/courses/${courseId}`)}>
        Back to course
      </Button>
      <h1>{lesson.title}</h1>
      <div className='lesson-content'>
        <p>{lesson.content}</p>
      </div>
     
     <Button
      variant='primary'
      onClick={handleMarkComplete}
      disabled={isComplete}
     >
        {isComplete ? 'Completed' : 'Mark as complete'}
     </Button>

     <h2>Discussions</h2>
     <DiscussionThread 
       lessonId={lessonId}
       discussions={discussions}
       onAddComment={handleAddComment}
     />
    </div>
  );
};

export default LessonPage;
