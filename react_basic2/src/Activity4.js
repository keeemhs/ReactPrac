import { useState } from 'react';

export default function Activity4() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState([]);
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('title');
    const [result, setResult] = useState([]);

    return (
        <div>
            <form>
                <label htmlFor="writer">작성자:</label>
                <input id="writer" type="text" value={name} onChange={(e) => setName({ name: e.target.value })} />
                <label htmlFor="title">제목:</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle({ title: e.target.value })} />
                <button type="button" onClick={setComment}>
                    작성
                </button>
            </form>
            <form>
                {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
                <select value={searchType} onChange={(e) => setSearchType({ searchType: e.target.value })}>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>
                <input type="text" placeholder="검색어" value={inputSearch} onChange={(e) => setSearch({ inputSearch: e.target.value })} />
                <button type="button" onClick={search}>
                    검색
                </button>
            </form>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {comment.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h4>검색결과</h4>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {setResult((value, index) => {
                        return (
                            <tr key={result}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
