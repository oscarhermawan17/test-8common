import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Reply from '@mui/icons-material/Reply';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReplyAll from '@mui/icons-material/ReplyAll';
import ForwardTwoToneIcon from '@mui/icons-material/ForwardTwoTone';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DoNotDisturbOutlinedIcon from '@mui/icons-material/DoNotDisturbOutlined';

import styles from './ActionButton.styles'

export default function ActionButton({ onReply, onReplyAll, onForward, onEscalate, onDiscard }) {
  const [moreButton, setMoreButton] = React.useState(false);

  return (
    <>
      <Paper style={styles.listTop}>
        <MenuList style={styles.menuList}>
          <div style={styles.divideTopList}>
            <MenuItem onClick={() => onReply('ActionsButtonjs OnClick Reply')}>
              <ListItemIcon>
                <Reply style={styles.whiteColor} fontSize="medium" />
              </ListItemIcon>
              <Typography style={styles.whiteColor} variant="inherit">Reply</Typography>
            </MenuItem>
            <MenuItem style={styles.borderMenu}onClick={() => console.log('...')}>
              <ListItemIcon onClick={() => setMoreButton(!moreButton)}>
                  <MoreHorizIcon style={styles.whiteColor} fontSize="large" />
              </ListItemIcon>
            </MenuItem>
          </div>
        </MenuList>
      </Paper>

      { moreButton && (
      <Paper style={styles.listOnBot}>
        <MenuList>
          <MenuItem onClick={() => onReplyAll('ActionsButtonjs OnClick Reply All')}>
            <ListItemIcon>
              <ReplyAll style={styles.darkBlue} fontSize="medium" />
            </ListItemIcon>
            <Typography variant="inherit">Reply All</Typography>
          </MenuItem>
          <MenuItem onClick={() => onForward('ActionsButtonjs OnClick Forward')}>
            <ListItemIcon>
              <ForwardTwoToneIcon style={styles.darkBlue} fontSize="medium" />
            </ListItemIcon>
            <Typography variant="inherit">Forward</Typography>
          </MenuItem>
          <MenuItem onClick={() => onEscalate('ActionsButtonjs OnClick Escalate')}>
            <ListItemIcon>
              <LabelImportantIcon style={styles.darkBlue} fontSize="medium" />
            </ListItemIcon>
            <Typography variant="inherit">Escalate</Typography>
          </MenuItem>
          <MenuItem onClick={() => onDiscard('ActionsButtonjs OnClickDiscard')}>
            <ListItemIcon>
              <DoNotDisturbOutlinedIcon style={styles.darkBlue} fontSize="medium" />
            </ListItemIcon>
            <Typography variant="inherit">Discard</Typography>
          </MenuItem>
        </MenuList>
      </Paper>
      )}
    </>
  )
}