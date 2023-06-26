import {styled} from "@mui/material/styles";
import {Button, IconButton} from "@mui/material";

export const DefaultButton = styled(Button)(() => ({
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid #333333',
    borderRadius: '10px',
    padding: '0 2rem',
    '&:hover': {
        color: 'white',
        backgroundColor: '#333333',
        border: '2px solid #D3D3D3',
        borderRadius: '10px',
    },
}))

export const DisabledButton = styled(DefaultButton)(() => ({
    backgroundColor: '#D3D3D3',
    marginRight: '5rem',

}))

export const LargeButton = styled(DefaultButton)(() => ({
    padding: '0 5rem',
}))


export const DefaultIconButton = styled(IconButton)(() => ({
    width: '2.5rem',
    height: '2.5rem',
    color: "#333333",
    '&:hover': {
        backgroundColor: '#DCDCDC',
        border: '2px solid #333333',
        borderRadius: '10px',
    }
}))