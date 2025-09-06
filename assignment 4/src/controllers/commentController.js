import Comment from "../models/commentSchema.js";
export const updateComment = async (req, res) => {
  try {
   const {commentId} = req.params;
   const {content} = req.body;
   const result = await Comment.updateOne({_id:commentId}, {$set:{content:content}}); 
   res.status(201).json({message:"comment is updated", result});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update comment" });
  }
};

export const deleteComment = async (req, res) => {
  try {
     const {commentId} = req.params;
     const result = await Comment.deleteOne({_id:commentId});
   res.status(200).json({message:"comment is deleted", result});
     
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete comment" });
  }
};
