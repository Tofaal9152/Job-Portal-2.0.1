import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ModalData from "./ModalData";

const Edit_Modal = ({ setopen, open }: { setopen: any; open: any }) => {
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setopen(false)}
        className="sm:max-w-[425px] bg-black text-white border-[#10B981] shadow-lg shadow-[#10B981]"
      >
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription className="text-slate-400">
            Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        {/* from */}
        <ModalData setopen={setopen} />
      </DialogContent>
    </Dialog>
  );
};

export default Edit_Modal;
