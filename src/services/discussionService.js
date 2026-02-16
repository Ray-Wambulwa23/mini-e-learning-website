const discussions = new Map();

let commentIdCounter = 1;

export const getDiscussionByLesson = (lessonId) => {
    if(!discussions.has(lessonId)){
        return [];
    }
    return discussions.get(lessonId);
};

export const addComment = (lessonId, text) => {
    const comment = {
        id: commentIdCounter++,
        lessonId: lessonId,
        text: text,
        timestamp: new Date()
    }

    const lessonComments = discussions.get(lessonId) || [];

    lessonComments.push(comment);

    discussions.set(lessonId, lessonComments);

    return comment;
};

export const clearDiscussions = () => {
    discussions.clear();
    commentIdCounter = 1;

};