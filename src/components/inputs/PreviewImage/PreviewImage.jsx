import { Button } from "../button";
import { Dialog } from "../dialog";

export const ImagePreviewDialog = ({ croppedImage }) => {
  return (
    <Dialog
      maxWidth="lg"
      title={"Preview Image"}
      button={
        <Button
          className={`mt-4 capitalize xl:text-sm 2xl:text-semi-base`}
          variant={"contained"}
        >
          View Image
        </Button>
      }
    >
      {() => (
        <>
          <img src={croppedImage} width={400} height={400} alt="" />
        </>
      )}
    </Dialog>
  );
};
