import React, { useState } from 'react';
import './ImageUpload.css';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import { storage, db } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const getModalStyle = () => {
    const top = 50;
    const left = 50;
    
    return {
        top : `${top}`,
        left : `${left}`,
        transform : `translate(${top}%, -${left}%)`,
    };
};

const useStyles = makeStyles((theme) => ({
    paper : {
        position: 'absolute',
        width: 500,
        height: 343,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #DDDFE2',
        outline : 'none',
        boxShadow: theme.shadows[5],
        borderRadius: '5px',
    },
}));




export const ImageUpload = ({ username }) => {

    const classes = useStyles();

    const [modelStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [noLikes, setNoLikes] = useState(0);
    const [image, setImage] = useState('');
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);

    const uploadFileWithClick = () => {
        document.getElementsByClassName('imageFile')[0].click()
    };

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleUpload = (e) => {
        e.preventDefault();


    };

    const handleChange = (e) => {
        e.preventDefault();

        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }

    };



  return (

    <div className="imageupload">
        <Modal 
            open={open}
            onClose={handleClose}
        >

        <div style={modelStyle} className={classes.paper}>
            <form className='imageupload__commentAssign'>
                <div className="imageupload__firstSectionModel">
                    <h3>Create Post</h3>
                </div>
                <div className="imageupload__secondSectionModel">
                    < Avatar
                        className='imageupload__avatar'
                        alt=''
                    />
                    <input 
                        type="text" 
                        onChange={(e) => setCaption(e.target.value)} 
                        onClick={handleOpen}
                        placeholder={`Whats on your mind ${username}`}
                    />
                </div>
                <hr />

                <div className="imageupload__imageuploadmodal" onClick={uploadFileWithClick}>
                    <img src="https://cdn2.iconfinder.com/data/icons/unigrid-phantom-multimedia-vol-1/60/020_044_image_painting_photo_picture_gallery_album_3-512.png" alt="" className='imageupload__gallery' height="100px" width="100px" />
                    <input type="file" className='imageFile' onChange={handleChange} />
                    <h3>Photo</h3>
                </div>
                <br />
                <div className="imageupload__feedModal">
                    <label className="containerr">
                        <input type="checkbox"checked />
                        <span className="checkmark"></span>
                    </label>
                    <div className="imageupload__colorwrap1">
                        <img src="https://cdn-icons-png.flaticon.com/512/5395/5395993.png" className='imageupload__newsFeed' alt="" />
                    </div>
                    <h3>News Feed</h3>
                    <br />
                    <h2 className={`imageText ${image && 'show'}`} >Image is added and will be displayed after clicking the Post button</h2>
                    <Button type='submit' onClick={handleUpload} className='imageupload__submitButton'>Post</Button>
                </div>
            </form>
        </div>

    </Modal>

    <div className="imageupload__container">
        <div className="imageupload__firstSection">
            <h3>Create Post</h3>
        </div>

        <div className="imageupload__secondSection">
            <Avatar 
                className='imageupload__avatar'
                alt=''
            />

            <input type="text" onClick={handleOpen} placeholder={`What's on your mind ${username}`} />
        </div>

        <hr />

        <div className="uploadimage__options" onClick={setOpen}>
            <div className="imageupload__imageupload">
                <img src="https://cdn2.iconfinder.com/data/icons/unigrid-phantom-multimedia-vol-1/60/020_044_image_painting_photo_picture_gallery_album_3-512.png" className='imageupload__gallery' alt="" />
                <h3>Photo</h3>
            </div>

            <div className="imageupload__more">
                <img src="https://img.favpng.com/1/2/25/computer-icons-download-dots-png-favpng-nWMw66H2GSb3Zd284mUrLBpBa.jpg" className='imageupload__dots' alt="" />
            </div>
        </div>

        <progress value={progress} max="100" className={`progress ${progress && 'show'}`} />

    </div>

    </div>
  )
};
