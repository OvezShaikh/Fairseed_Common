import { Button } from "../button";
import { Dialog } from "../dialog";

export const ImagePreviewDialog = ({ croppedImage }) => {
  return (
    <Dialog
      maxWidth="sm"
      title={"Preview Image"}
      button={
        <Button
          className={`mt-4 capitalize xl:text-sm 2xl:text-semi-base`}
          variant={"contained"}
        >
          View Logo
        </Button>
      }
    >
      {() => (
        <>
          {/* eslint-disable-next-line */}
          <img src={croppedImage} width={150} height={50} alt="" />
        </>
      )}
    </Dialog>
  );
};
