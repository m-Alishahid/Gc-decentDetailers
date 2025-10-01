
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Check } from "lucide-react";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  details?: React.ReactNode;
}

const ConfirmationModal = ({
  open,
  onClose,
  title,
  description,
  details,
}: ConfirmationModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <AlertDialogTitle className="text-center text-xl">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {description}
          </AlertDialogDescription>
          {details && (
            <div className="mt-4 border-t border-gray-200 pt-4">
              {details}
            </div>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-center">
          <AlertDialogAction 
            className="bg-decent-blue hover:bg-decent-lightBlue text-white"
            onClick={onClose}
          >
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationModal;
