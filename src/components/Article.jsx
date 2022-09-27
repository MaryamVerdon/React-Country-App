import axios from 'axios';
import React, { useState } from 'react';

const Article = ({article}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editContent, setEditContent] = useState("");
    const dateFormateur = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return newDate;
    };

    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date,
            updateDate: Date.now(),
        };
        axios
            .put("http://localhost:3001/articles/" + article.id, data)
            .then(() => setIsEdit(false));
    };

    return (
        <div className="article" style={{ background: isEdit ? "#f3feff" : "white"}}>
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateFormateur(article.date)}</em>
            </div>
            {
                isEdit ? <textarea defaultValue={editContent ? editContent : article.content} autoFocus onChange={(e)=> setEditContent(e.target.value)}></textarea> :  <p>{editContent ? editContent : article.content}</p>
            }
           
            <div className="btn-container">
                {
                    isEdit ? <button onClick={()=> handleEdit()}>Valider</button> : <button onClick={() => setIsEdit(true)}>Editer</button>
                }
                <button>Supprimer</button>
            </div>
        </div>
    );
};

export default Article;