import styled from "styled-components";

export const CheckboxContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }

    label {
        margin-left: 8px;
        font-weight: 500;
        cursor: pointer;
    }

    input[type=checkbox] {
        all: unset;
        position: relative;
        display: inline-block;
        border: 1px solid #A8A8B3;
        border-radius: 4px;
        width: 16px;
        min-width: 16px;
        height: 16px;
        cursor: pointer;
    }

    input[type=checkbox]:checked {
        border: 1px solid #1890ff;
    }

    input[type=checkbox]:checked::after {
        content: "✔";
        position: absolute;
        width: 100%;
        height: 100%;
        top: calc(50% - 9px);
        left: calc(50% - 6px);
        color: #1890ff;
    }
`;

export const SubAreaContainer = styled.div`
    text-align: center;
    margin: 16px 0;
    
    &:first-child {
        margin: 0;
    }

    &:last-child {
        margin: 0;
    }

    span {
        font-weight: bold;
    }
    
    .content {
        margin-top: 16px;
        padding: 16px;
        border: 1px dashed;
    }
`;

export const Notice = styled.div`
    text-align: center;
    margin-bottom: 32px;

    > span {
        font-weight: normal;
    }

    .error {
        color: #e74c3c;
    }
`;

export const OtherInput = styled.textarea`
    resize: none;
    width: 50%;
    height: 76px;
    outline: none;
    padding: 16px;
    font-size: 1rem;
    border-width: 1px;
    border-color: #dddddd;
    border-radius: 4px;
    transition: border-color linear .2s;
    
    &:focus {
        border-color: #1890ff;
    }
`;
