import React from "react";

import CommentCard from "../../molecule/Cards/CommentCards";
import { NewsResponse } from "../../../interfaces";

import "./comments-container.scss";
import NewsCard from "../../molecule/Cards/NewsCard";

interface TProps {
  subUrl: string;
  commentsIdObj: NewsResponse;
}

const CommentsContainer = ({ commentsIdObj, subUrl }: TProps) => {
  return (
    <div className="comments-container-wrapper">
      <NewsCard subUrl={`${subUrl}/${commentsIdObj.id}.json`} />
      <textarea name="text" rows={6} cols={60}></textarea>
      <br />
      <input className="add-comment-btn" type="submit" value="add comment" />

      <div style={{ height: 10 }} />
      {Array.isArray(commentsIdObj.kids) &&
        commentsIdObj.kids.map((item: number, key: number) => (
          <CommentCard key={key} id={item} subUrl={subUrl} />
        ))}
      <div style={{ height: 10 }} />
    </div>
  );
};

export default CommentsContainer;
