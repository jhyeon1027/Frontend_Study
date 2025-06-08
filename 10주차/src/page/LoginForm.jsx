import React from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import MyButton from '../components/button.jsx';

// 폼 컨테이너 스타일
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 50px auto;
`;

// 입력 필드 그룹 스타일
const FormGroup = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;

// 입력 필드 스타일
const Input = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    &:focus {
        border-color: orange;
        outline: none;
    }
    &::placeholder { /* 플레이스홀더 텍스트 스타일 */
        color: #999;
    }
`;

// 에러 메시지 스타일
const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        // 비밀번호와 비밀번호 확인이 일치하는지 간단하게 검사
        if (data.password !== data.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return; // 일치하지 않으면 함수 종료
        }

        console.log('회원가입 데이터:', data); // 모든 입력 데이터 출력
        alert('회원가입 성공! 콘솔을 확인해주세요.');
        // 여기에서 서버로 데이터를 전송하는 등의 다음 로직을 구현하면 됩니다.
    };

    return (
        <FormContainer>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate> {/* noValidate: HTML5 기본 유효성 검사 비활성화 */}
                <FormGroup>
                    <Input
                        id="email"
                        type="email"
                        placeholder="이메일을 입력해주세요!"
                        {...register('email', {
                            required: '이메일은 필수 입력입니다.' // 필수 입력만 검사
                        })}
                    />
                    {/* 에러 메시지 표시 */}
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                    <Input
                        id="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요!"
                        {...register('password', {
                            required: '비밀번호는 필수 입력입니다.', // 필수 입력만 검사
                            minLength: { // minLength 규칙 추가
                                value: 8,
                                message: '비밀번호는 8자 이상이어야 합니다.' // 8자 미만일 때의 메시지
                            }
                        })}
                    />
                    {/* 에러 메시지 표시 */}
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요!"
                        {...register('confirmPassword', {
                            required: '비밀번호 확인은 필수 입력입니다.' // 필수 입력만 검사
                        })}
                    />
                    {/* 에러 메시지 표시 */}
                    {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
                </FormGroup>

                {/* MyButton 컴포넌트를 제출 버튼으로 사용 */}
                <MyButton type="submit">회원가입</MyButton>
                <MyButton onClick={()=>navigate("/")}>이전</MyButton>
            </form>
        </FormContainer>
    );
}

export default LoginForm;