"use client";

import { DownloadForm } from "./DownloadForm";
import { Modal } from "./Modal";
import { useModal } from "./ModalProvider";
import { SignupForm } from "./SignupForm";

export function ModalDialogs() {
  const { current, close } = useModal();
  if (current === "download") {
    return (
      <Modal title="Recevoir le programme" onClose={close} maxWidth="420px">
        <DownloadForm />
      </Modal>
    );
  }
  if (current === "signup") {
    return (
      <Modal title="Candidature à la prochaine session" onClose={close} maxWidth="440px">
        <SignupForm />
      </Modal>
    );
  }
  return null;
}
