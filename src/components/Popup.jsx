import Portal from'./Portal'

const Popup = ({ children, onClose }) => {

  return (
      <Portal>
        <div onClick={onClose}
          className="absolute inset-0 bg-[rgba(0,0,0,0.2)] z-[2] w-full h-full"
        ></div>
        <div className="absolute xl:top-1/4 bottom-5 right-1/2 translate-x-1/2 h-fit rounded-[30px] z-20">
          {children}
        </div>
      </Portal>
  );
};

export default Popup;
