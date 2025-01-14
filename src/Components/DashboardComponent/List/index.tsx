import { DocumentScannerRounded, People, Search } from "@mui/icons-material";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField } from "@mui/material";

export default function ListComponent():JSX.Element{
    return(
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',mt:7}}>
     <Paper sx={{p:1}}>
        <List>
            <ListItem disablePadding>
            <TextField variant="standard"></TextField>
                <ListItemButton>
                    <ListItemIcon>
                        <Search></Search>
                    </ListItemIcon>
                    <ListItemText primary="Cari"></ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <People></People>
                    </ListItemIcon>
                    <ListItemText primary="Komunitas"></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                        <DocumentScannerRounded></DocumentScannerRounded>
                    </ListItemIcon>
                    <ListItemText primary="Dokumentasi"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        </Paper>
    </Box>
)
}