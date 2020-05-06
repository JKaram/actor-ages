import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalCard = styled.div`
  margin-top: 100px;
  position: relative;
  height: 100%;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
  background: ${(p) => p.theme.yellow};
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  color: #000;
  overflow: scroll;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

const Portal = ({ children }) => {
  const modalRoot = document.getElementById("modal");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
  }, [el, modalRoot]);
  useEffect(() => {
    return () => modalRoot.removeChild(el);
  });
  return createPortal(children, el);
};

export const Modal = ({ children, toggleModal, isOpen }) => {
  return (
    <Portal>
      <ModalWrapper>
        <ModalCard>
          <CloseButton onClick={() => toggleModal(!isOpen)}>
            <img src="https:icon.now.sh/x/ff0000" alt="close" />
          </CloseButton>
          {children}
        </ModalCard>
        <Background onClick={() => toggleModal(!isOpen)} />
      </ModalWrapper>
    </Portal>
  );
};
