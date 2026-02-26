const STORAGE_KEY = 'elearning_progress';

let completedLessons = new Set();

const loadFromStorage = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            completedLessons = new Set(JSON.parse(data));
        }
    } catch (error) {
        console.warn('Could not load progress', error);
    }
};

const saveToStorage = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedLessons]));
    } catch (error) {
        console.warn('Could not save progress', error);
    }
};

loadFromStorage();

export const getCompletedLessons = () => {
    return completedLessons;
};

export const isLessonComplete = (lessonId) => {
    return completedLessons.has(lessonId);
};

export const markLessonComplete = (lessonId) => {
    completedLessons.add(lessonId);
    saveToStorage();
};

export const markLessonIncomplete = (lessonId) => {
    completedLessons.delete(lessonId);
    saveToStorage();
};

export const toggleLessonCompletion = (lessonId) => {
    if (completedLessons.has(lessonId)) {
        markLessonIncomplete(lessonId);
    } else {
        markLessonComplete(lessonId);
    }
};


