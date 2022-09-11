import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children }) => {
    return (
        <section className="h-full w-screen z-50 bg-black flex items-center justify-center fixed top-0 left-0 bg-opacity-40 ">
            {children}
        </section>
    );
};

export default Modal;
