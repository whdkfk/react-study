import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from '../newPage/style';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const NewPage = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState(null);
    const [diaryText, setDiaryText] = useState("");
    const [diaryList, setDiaryList] = useState([]);

    const submitDiary = () => {
        if (diaryText.trim()) {
            const newDiary = {
                date: new Date().toLocaleDateString(),
                emotion: select,
                text: diaryText,
            };
            alert('작성이 완료되었습니다');
            setDiaryList([...diaryList, newDiary]);
            setDiaryText("");
            setSelect(null);
            navigate("/");
        }
    };

    const diaryChange = (event) => {
        setDiaryText(event.target.value);
    };

    const emotionClick = (emotion) => {
        setSelect(emotion);
    };

    return (
        <S.Container>
            <S.Header>
                <button onClick={() => {
                    navigate("/");
                }}>뒤로가기</button>
                <h2>새일기쓰기</h2>
            </S.Header>
            <h2>오늘의 날짜</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
            <h2>오늘의 감정</h2>
            <div>
                <button
                    onClick={() => emotionClick("완전좋음")}
                    style={{ backgroundColor: select === "완전좋음" ? "green" : "" }}
                >
                    완전좋음
                </button>
                <button
                    onClick={() => emotionClick("좋음")}
                    style={{ backgroundColor: select === "좋음" ? "yellowgreen" : "" }}
                >
                    좋음
                </button>
                <button
                    onClick={() => emotionClick("그럭저럭")}
                    style={{ backgroundColor: select === "그럭저럭" ? "yellow" : "" }}
                >
                    그럭저럭
                </button>
                <button
                    onClick={() => emotionClick("나쁨")}
                    style={{ backgroundColor: select === "나쁨" ? "orange" : "" }}
                >
                    나쁨
                </button>
                <button
                    onClick={() => emotionClick("끔찍함")}
                    style={{ backgroundColor: select === "끔찍함" ? "red" : "" }}
                >
                    끔찍함
                </button>
            </div>

            <h2>오늘의 일기</h2>
            <input type="text" placeholder="오늘은 어땠나요?" onChange={diaryChange}></input>
            <div>
            <button onClick={() => navigate("/")}>취소하기</button>
                <button
                    style={{ backgroundColor: "yellowgreen" }}
                    onClick={submitDiary}
                >작성완료
                </button>
            </div>
        </S.Container>
    )
}

export default NewPage;