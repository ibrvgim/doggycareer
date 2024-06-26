'use client';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function FileInput({
  label,
  name,
  bgColor,
}: {
  label: string;
  name: string;
  bgColor?: string;
}) {
  return (
    <Button
      component='label'
      role={undefined}
      variant='contained'
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      style={{
        backgroundColor: `${bgColor}`,
        fontSize: '13px',
        letterSpacing: '1px',
      }}
    >
      {label}
      <VisuallyHiddenInput type='file' name={name} />
    </Button>
  );
}

export default FileInput;
