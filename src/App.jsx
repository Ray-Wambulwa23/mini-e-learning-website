import React from 'react';
import Layout from './components/common/layout';
import Button from './components/common/buttons';
import Card from './components/common/card';
import CourseCard from './components/CourseCard';
import { mockCourses } from './data/mockCourses';
import './App.css';

function App() {
  const handleCourseClick = (courseId) => {
    alert(`Clicked course: ${courseId}`);
  };

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <Layout title="Component Testing">
      <div style={{ padding: '20px' }}>
        <h2>Testing Components</h2>
        
        {/* Test Buttons */}
        <section style={{ marginBottom: '30px' }}>
          <h3>Buttons</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={handleButtonClick} variant="primary">
              Primary Button
            </Button>
            <Button onClick={handleButtonClick} variant="secondary">
              Secondary Button
            </Button>
            <Button onClick={handleButtonClick} variant="primary" disabled>
              Disabled Button
            </Button>
          </div>
        </section>

        {/* Test Card */}
        <section style={{ marginBottom: '30px' }}>
          <h3>Card Component</h3>
          <Card>
            <h4>This is a Card</h4>
            <p>Cards are containers with consistent styling.</p>
          </Card>
        </section>

        {/* Test CourseCards */}
        <section>
          <h3>Course Cards</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '20px' 
          }}>
            {mockCourses.map(course => (
              <CourseCard 
                key={course.id}
                course={course}
                onClick={handleCourseClick}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
