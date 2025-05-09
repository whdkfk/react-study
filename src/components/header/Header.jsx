import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from '../header/style';
import List from '../list/List';

const Header = () =>{
    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();

    const nextDate = () => {
        setDate(new Date(date.getFullYear(), date.getMonth()+1));
    }

    const backDate = () => {
        setDate(new Date(date.getFullYear(), date.getMonth()-1))
    }

    return (
    <S.Container>
        <S.Content>
            <button onClick={backDate}>{"<"}</button>
            <h2>{date.getFullYear()}년 {date.getMonth()+1}</h2>
            <button onClick={nextDate}>{">"}</button>
        </S.Content>
        <S.Main>
            <S.Main1>
                <select>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된 순</option>
                </select>
                <button onClick={()=>{
                    navigate("/new");
                }}>새 일기 쓰기</button>
            </S.Main1>
        </S.Main>
        <List />
    </S.Container>
    )
}

export default Header;