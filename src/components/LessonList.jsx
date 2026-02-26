const LessonList = ({lessons, completedLessonsIds, onLessonClick}) => {
    return (
        <div className="lesson-list">
            {lessons.map(lesson => (
                <div
                    key={lesson.id}
                    className="lesson-item"
                    onClick={() => onLessonClick(lesson.id)}
                >
                    {completedLessonsIds.has(lesson.id) && (
                        <span className="checkmark">✅</span>
                    )}

                    <span className="lesson-order">{lesson.order}</span>
                    <span className="lesson-title">{lesson.title}</span>
                </div>
            ))}
        </div>
    );
};

export default LessonList;
