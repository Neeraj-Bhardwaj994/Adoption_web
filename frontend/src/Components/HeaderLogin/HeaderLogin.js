import React from "react";
import * as S from "./style";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'

const HeaderLogin = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <S.Wrap>
      <S.Logo href="/"><S.Img src={"Sabar_Logo_img.jpg"} alt="Sabar Logo"></S.Img></S.Logo>
      <S.Navbar>
        <S.Navitems>
          <Link to="/" style={{ color: "#03175C",textDecoration: "none", fontWeight: 500 }}>
            HOME
          </Link>
        </S.Navitems>
        <S.Navitems>
          <Link to="/about" style={{ color: "#03175C",textDecoration: "none", fontWeight: 500 }}>
            ABOUT
          </Link>
        </S.Navitems>
        <S.Navitems>
          <Link to="/contact" style={{ color: "#03175C",textDecoration: "none", fontWeight: 500 }}>
            CONTACT
          </Link>
        </S.Navitems>
        <S.Navitems>
          <Link to="/admincred3$vCtVAHJ505" style={{ color: "#03175C",textDecoration: "none", fontWeight: 500 }}>
            LOGOUT
          </Link>
        </S.Navitems>

        <S.Ham>
        <MenuIcon
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      </MenuIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/" style={{ color: "#000",textDecoration: "none" }}>HOME</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/about" style={{ color: "#000",textDecoration: "none" }}>ABOUT</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/contact" style={{ color: "#000",textDecoration: "none" }}>CONTACT</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/admincred3$vCtVAHJ505" style={{ color: "#000",textDecoration: "none" }}>LOGOUT</Link></MenuItem>
      </Menu>
        </S.Ham>
      </S.Navbar>
    </S.Wrap>
  );
};

export default HeaderLogin;
