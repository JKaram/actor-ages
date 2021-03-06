import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import closeIcon from "images/clear-24px.svg";

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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 80%;
  max-width: 600px;
  width: 90%;
  z-index: 10;
  background: ${(p) => p.theme.background};
  border: 5px solid ${(p) => p.theme.pink};
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  overflow: auto;
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

const modalRoot = document.getElementById("modal");
const Portal = ({ children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, [el]);

  return createPortal(children, el);
};

export const Modal = ({ children, toggleModal, isOpen }) => {
  return (
    <Portal>
      <ModalWrapper>
        <ModalCard>
          <CloseButton onClick={() => toggleModal(!isOpen)}>
            <img src={closeIcon} alt="close" />
          </CloseButton>
          {children}
        </ModalCard>

        <Background onClick={() => toggleModal(!isOpen)} />
      </ModalWrapper>
    </Portal>
  );
};
