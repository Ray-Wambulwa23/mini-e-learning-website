
const DiscussionThread = ({lessonId, discussions, onAddComment}) => {
    const [commentText, setCommentText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmed = commentText.trim();

        if(trimmed.lenngth === 0){
            return;
        }

        setIsSubmitting(true);
        onAddComment(lessonId, trimmed);
        setCommentText('');
        setIsSubmitting(false);
    };

    return (
        <div className="discussion-thread">
            <h3>Discussion</h3>

            {discussions.length === 0 ? (
                <p className="empty-state">No comments yet.Be the first!</p>
            ): (
                <div className="comment-list">
                    {discussions.map(comment => (
                        <div
                            key={comment.id}
                            className="comment"
                        >
                            <p className="comment-text">{comment.text}</p>
                            <span className="comment-time">
                                {new Date(comment.timestamp).toLocaleDateString()}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            <form onSubmit={handleSubmit} className="comment-form">
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="add a comment..."
                    rows="3"
                />
                <button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting || commentText.trim().lenght ===0}
                >
                    {isSubmitting ? 'posting...' : 'Post Comment'}
                </button>
            </form>
        </div>
    );
};