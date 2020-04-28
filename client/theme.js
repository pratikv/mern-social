import { createMuiTheme } from "@material-ui/core/styles";
import { indigo, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            light: "#757de8",
            main: "#3f51bf",
            dark: "#002984",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff89b0",
            main: "#ff4081",
            dark: "#c600ff",
            contrastText: "#000"
        },
        openTitle: indigo["400"],
        protectedTitle: pink["400"],
        type: 'light'
    }
});
export default theme;