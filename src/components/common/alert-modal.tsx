import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loading } from "@/components/common/loading";

interface AlertModalProps {
  title: string;
  description?: string;
  alertMessage?: string;
  name?: string;
  loading?: boolean;
  isOpen: boolean;
  type?: "default" | "destructive";
  onClose: () => void;
  onConfirm: () => void;
}

export const AlertModal = ({
  title,
  description,
  alertMessage,
  name,
  isOpen,
  type = "destructive",
  onClose,
  onConfirm,
  loading=false,
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div className="flex items-center gap-x-2">
              {alertMessage ? (
                <span>{alertMessage}</span>
              ) : (
                <>
                  <span>Are you sure want to delete</span>
                  <span className="text-lg font-bold text-red-500">{name}</span>
                  ?
                </>
              )}
            </div>
            <div className="flex w-full items-center justify-end space-x-2 pt-6">
              <Button disabled={loading} variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button disabled={loading} variant={type} onClick={onConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
