import { AccountCircle, MenuOutlined } from "@mui/icons-material";
import { AppBar, Backdrop, Box, IconButton, Menu, MenuItem, Portal, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import ListComponent from "../../List";

export default function NavigationComponents(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [auth] = useState<boolean>(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const menuOpen = () => {
        setIsMenuOpen(true);
        setOpen(true);
        console.log("Menu opened:", { isMenuOpen: true, open: true });
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpen(false);
        console.log("Menu closed:", { isMenuOpen: false, open: false });
    }

    const menuAlgo = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const closePop = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <AppBar position="fixed" color="secondary">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton
                                size="large"
                                edge="start"
                                onClick={menuOpen}
                                color="inherit"
                                sx={{ mr: 2 }}
                                aria-label="menu"
                            >
                                <MenuOutlined />
                            </IconButton>
                            <Typography variant="h6">IndDocument</Typography>
                        </Box>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="current account"
                                    aria-controls="menu"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={menuAlgo}
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={closePop}
                                >
                                    <MenuItem>My Profile</MenuItem>
                                    <MenuItem>Setting</MenuItem>
                                    <MenuItem>Log-out</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            {isMenuOpen && (
                <>
                    <Portal>
                        <Box sx={(theme) => ({ zIndex: theme.zIndex.drawer + 5, position: "fixed",left: 0,top:14,maxHeight:'calc(100vw-64px)' })}>
                            <ListComponent />
                        </Box>
                    </Portal>
                    <Backdrop
                        sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
                        open={open}
                        onClick={closeMenu}
                    />
                </>
            )}
        </>
    );
}