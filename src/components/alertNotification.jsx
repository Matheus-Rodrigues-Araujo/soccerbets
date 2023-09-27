import React from "react";
import { Alert, Button } from "@material-tailwind/react";
 
export function AlertCustomAnimation() {
  const [open, setOpen] = React.useState(true);
 
  return (
    <>
      {!open && (
        <Button className="absolute" onClick={() => setOpen(true)}>
          Show Alert
        </Button>
      )}
      <Alert
        open={open}
        className="bg-green-400 flex"
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        A dismissible alert with custom animation.
      </Alert>
    </>
  );
}