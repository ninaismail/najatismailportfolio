import Portal from'./Portal'

const Popup = ({ children, isOpen, onClose }) => {
  return (
      <Portal isOpen={isOpen}>
        <div onClick={onClose}
          className="absolute inset-0 bg-[rgba(0,0,0,0.2)] z-[2] w-full h-full"
        ></div>
        <div className="absolute md:top-1/4 top-1/2 right-1/2 translate-x-1/2 h-full rounded-md z-20">
          {children}
        </div>
      </Portal>
  );
};

export default Popup;
