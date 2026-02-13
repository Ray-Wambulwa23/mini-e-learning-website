import { mockCourses } from "../data/mockCourses"

export const getAllCourses = () => {
    return mockCourses;
}

export const getCourseById = (courseId) => {
    return mockCourses.find(course => course.id == courseId);
}

export const getLessonById = (courseId, lessonId) => {
    const course = mockCourses.find(course => course.id === courseId);
    if(!course){
        return null;
    }
    const lesson = course.lessons.find(lesson => lesson.id == lessonId);
    return lesson || null;   
}