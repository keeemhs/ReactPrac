import React, { Component, createRef } from 'react';

class RefActivity1 extends Component {
    constructor(props) {
        super(props);

        this.inputWriterRef = createRef(); // 작성자 input에 대한 ref
        this.inputTitleRef = createRef(); // 제목 input에 대한 ref

        this.state = {
            inputWriter: '',
            inputTitle: '',
            comments: [],
        };

        this.onChange = this.onChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    onChange(e) {
        this.setState({ inputWriter: e.target.value });
    }

    addComment() {
        if (this.state.inputWriter.trim() === '' || this.state.inputTitle.trim() === '') {
            // 작성자 또는 제목이 비어있으면 입력하지 않음
            return;
        }

        const newComment = {
            writer: this.state.inputWriter,
            title: this.state.inputTitle,
        };

        this.setState({
            comments: [...this.state.comments, newComment],
            inputTitle: '',
            inputWriter: '',
        });
    }

    validateInputs() {
        if (this.state.inputWriter === '' || this.state.inputTitle === '') {
            if (this.state.inputWriter === '') {
                this.inputWriterRef.current.style.border = '2px solid red'; // 빨간 테두리 추가
            }
            if (this.state.inputTitle === '') {
                this.inputTitleRef.current.style.border = '2px solid red'; // 빨간 테두리 추가
            }
        } else {
            this.inputWriterRef.current.style.border = ''; // 테두리 스타일 초기화
            this.inputTitleRef.current.style.border = ''; // 테두리 스타일 초기화
            this.addComment(); // 입력이 모두 완료되면 댓글 추가
        }
    }
    render() {
        const { inputWriter, inputTitle, comments } = this.state;
        return (
            <>
                <form>
                    <label htmlFor="writer">작성자:</label>
                    <input
                        type="text"
                        id="writer"
                        value={inputWriter}
                        onChange={(e) => this.onChange(e)}
                        ref={this.inputWriterRef} // ref 연결
                    />
                    <label htmlFor="title">제목:</label>
                    <input
                        type="text"
                        id="title"
                        value={inputTitle}
                        onChange={(e) => this.setState({ inputTitle: e.target.value })}
                        ref={this.inputTitleRef} // ref 연결
                    />
                    <button
                        type="button"
                        onClick={() => {
                            this.validateInputs();
                            this.addComment();
                        }}
                    >
                        작성
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
                        {comments.map((value, index) => {
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
            </>
        );
    }
}

export default RefActivity1;
