import useFetch from "react";   

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    return (
        <from>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <button>저장</button>
        </from>
    );
}