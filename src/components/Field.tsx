// import React, { useState } from "react";
// import { IconButton, InputAdornment, TextField } from "@mui/material";
// import { IField } from "../types";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import EmailIcon from "@mui/icons-material/Email";

// export const Field: React.FC<IField> = ({
//   name,
//   label,
//   type,
//   id,
//   error,
//   helperText,
//   register,
//   required,
// }) => {
//   const [visible, setVisible] = useState(true);
//   return (
//     <TextField
//       margin="normal"
//       required={required}
//       fullWidth={true}
//       name={name}
//       label={label}
//       type={type ? (type && visible ? type : "text") : "text"}
//       id={id}
//       size="small"
//       error={error}
//       helperText={helperText}
//       {...register}
//       InputProps={
//         type && {
//           endAdornment: (
//             <InputAdornment
//               position="end"
//               onClick={() => setVisible((visible) => !visible)}
//             >
//               {!visible ? (
//                 <IconButton>
//                   <VisibilityIcon />
//                 </IconButton>
//               ) : (
//                 <IconButton>
//                   <VisibilityOffIcon />
//                 </IconButton>
//               )}
//             </InputAdornment>
//           ),
//         }
//       }
//     />
//   );
// };

import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { IField } from "../types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const Field: React.FC<IField> = ({
  name,
  label,
  type,
  id,
  error,
  helperText,
  register,
  required,
  icon,
}) => {
  const [visible, setVisible] = useState(true);
  return (
    <div style={{height:"70px"}}>
      <TextField
        margin="normal"
        required={required}
        fullWidth={true}
        name={name}
        label={label}
        type={type ? (type && visible ? type : "text") : "text"}
        id={id}
        size="small"
        error={error}
        helperText={helperText}
        {...register}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
          endAdornment: type && (
            <InputAdornment
              position="end"
              onClick={() => setVisible((visible) => !visible)}
            >
              {!visible ? (
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              ) : (
                <IconButton>
                  <VisibilityOffIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
