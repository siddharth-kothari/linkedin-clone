import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendIcon from '@mui/icons-material/Send';




const Post  = forwardRef(({name, description, message, photoUrl}, ref) => {
    
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption  Icon={ThumbUpOffAltIcon} title='Like' color='gray'/>
            <InputOption  Icon={CommentIcon} title='Comment' color='gray'/>
            <InputOption  Icon={IosShareIcon} title='Share' color='gray'/>
            <InputOption  Icon={SendIcon} title='Send' color='gray'/>
        </div>
    </div>
  )
})

export default Post