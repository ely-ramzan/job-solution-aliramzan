import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <Dialog.Content>{children}</Dialog.Content>
//     </Dialog>
//   );
// };

// export default Modal;