"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle } from "lucide-react";

const ConnectModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Generate Connection</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Connection</DialogTitle>
        </DialogHeader>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ingress Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="RMTP">RMTP</SelectItem>
            <SelectItem value="WHIP">WHIP</SelectItem>
          </SelectContent>
        </Select>
        <Alert>
          <AlertTriangle className="size-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action will reset all the active streams using current
            connection
          </AlertDescription>
        </Alert>
        <div className="flex justify-between">
          <DialogClose>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="primary" onClick={() => {}}>
            Generate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;
