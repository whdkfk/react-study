import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from '../header/style';

const List = ({ diaryList }) => {
    const list = diaryList || [];

    return (
        <div>
            <h2>작성한 일기</h2>
            {list.length === 0 ? (
                <p>작성한 일기가 없습니다.</p>
            ) : (
                <ul>
                    {list.map((diary, index) => (
                        <li key={index}>
                            <strong>{diary.date}</strong> - {diary.emotion} <br />
                            {diary.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};



export default List;