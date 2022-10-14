import { XMarkIcon } from "@heroicons/react/24/solid";
import { PopupProps } from "interfaces/elements/Popup";
import { createPortal } from "react-dom";

export const Popup = ({ onClose = () => {}, children }: PopupProps) => {
    const popupMarkup = (
        <div className="fixed top-0 left-0 w-screen h-screen z-20 flex justify-center items-center">
            <div className="w-full h-full fixed z-0 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-[90%] h-[85%] md:w-2/3 md:h-2/3 bg-white/90 dark:bg-black/90 backdrop-blur-lg z-10">
                <div className="absolute right-0 -top-[40px] cursor-pointer z-10 text-white"><XMarkIcon onClick={onClose} width={32} height={32} /></div>
                {children}
            </div>
        </div>
    );

    return (createPortal(popupMarkup, document.getElementById("tailwind")!))
};