import Portal from'./Portal'

const Popup = ({ children, isOpen, onClose }) => {
  return (
      <Portal isOpen={isOpen}>
        <div onClick={onClose}
          className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-[2]"
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md z-20">
          {children}
        </div>
      </Portal>
  );
};

export default Popup;
