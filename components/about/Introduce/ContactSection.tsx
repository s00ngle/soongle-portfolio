"use client";

import { useState } from "react";
import InfoButton from "./InfoButton";
import Alert from "@/components/common/Alert";

const ContactSection = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const showAlert = (message: string) => setAlertMessage(message);
  const hideAlert = () => setAlertMessage(null);

  return (
    <div>
      <InfoButton onAlert={showAlert} />
      {alertMessage && <Alert message={alertMessage} onClose={hideAlert} />}
    </div>
  );
};

export default ContactSection;
