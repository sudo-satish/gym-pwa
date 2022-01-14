import QrScanner from "qr-scanner";
import { useEffect, useState } from "react";
import { AspectRatio, Button } from "@chakra-ui/react";

const QRScanner = () => {
  const [qrScanner, setQrScanner] = useState<any>();
  useEffect(() => {
    const videoElem = document.getElementById("video") as HTMLVideoElement;
    const qrScanner = new QrScanner(videoElem, (result) =>
      console.log("decoded qr code:", result)
    );
    setQrScanner(qrScanner);
    qrScanner.start();
    return () => {
      qrScanner.stop();
    };
  }, []);

  return (
    <div>
      QR Scanner
      <AspectRatio
        maxW="560px"
        ratio={1}
        border="1px"
        borderColor="gray.200"
        height="150px"
        width="150px"
      >
        <video id="video"></video>
      </AspectRatio>
    </div>
  );
};

export default QRScanner;
