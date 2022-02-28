import { makeStyles } from "@material-ui/core/styles";
import { color } from "@mui/system";

export const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff",
        color: '#fff'
      },
      width: '400px',
      color: '#fff'
    },

    multilineColor:{
      color:'#fff'
  },

  floatingLabelFocusStyle: {
    color: '#fff'
  }
  });

