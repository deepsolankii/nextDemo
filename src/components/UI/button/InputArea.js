import { useState } from "react";
import { styled } from "styled-components";

const TextArea = styled.div`
  width: 100%;
  max-height: 60vh;
  overflow-wrap: break-word;
  overflow-y: auto;
  padding: 5px;
  font-size: 18px;
  line-height: 22px;
  outline: 0px solid transparent;
  &:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    color: ${(props) => props.theme.palette.text.light};
  }
`;

// const Input = styled.textarea`
//   resize: none;
//   width: 100%;
//   line-height: 22px;
//   font-size: 18px;
//   /* max-height: 60vh; */
//   height: max-content;
//   border: none;
//   overflow-wrap: break-word;
// `;

const InputArea = () => {
  const textChangeHandler = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <TextArea
      contentEditable='true'
      onInput={textChangeHandler}
      placeholder="What's Happening?!"
    ></TextArea>
  );
  // return <Input placeholder="What's Happening" />;
};

export default InputArea;
