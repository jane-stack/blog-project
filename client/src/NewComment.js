// import React, { useEffect, useState } from "react";

// function NewComment({user, select, isCommenting, setIsCommenting, onAddComment}) {
//     const [id, setId] = useState(0);
//     const [reply, setReply] = useState("");
//     const closeCommentForm = () => setIsCommenting(!isCommenting);

//     useEffect(() => {
//         setId(select.id);
//         setReply(select.reply);
//     }, [select]);

//     function handleSubmit(e) {
//         e.preventDefault();
//         const newReply = {
//             id: id,
//             reply: reply,
//             user_id: user.id
//         }
//         fetch("/comments", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newReply),
//         })
//         .then(resp => resp.json())
//         .then(newReply => onAddComment(newReply))

//         // refresh input field after submitting form
//         setReply("");
//         closeCommentForm();
//     }

//     return (
//         <form className="post-form" onSubmit={handleSubmit}>
//             <textarea className="post-input-description" type="textbox" name="reply" placeholder="Write your comment." onChange={(e) => setReply(e.target.value)} value={reply} />
//             <button type="submit" className="contact-btn">POST IT NOW</button>
//         </form>
//     )
// }

// export default NewComment;