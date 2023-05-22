import React, { useEffect, useRef, useState } from "react";

const Modal = (props) => {
	const [active, setActive] = useState(false);
	useEffect(() => {
		setActive(props.active);
	}, [props.active]);
	return (
		<div id={props.id} className={`modal ${active ? "active" : ""}`}>
			{props.children}
		</div>
	);
};

const ModalContent = (props) => {
	const contentRef = useRef(null);
	const closeModal = () => {
		contentRef.current.parentNode.classList.remove("active");
		if (props.onClose) props.onClose();
	};
	return (
		<div className="modal-content">
			{props.children}
			<div className="modal-close"></div>
		</div>
	);
};

export default Modal;
