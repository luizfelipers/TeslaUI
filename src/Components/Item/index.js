import React from 'react'
import Button from '../Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css'

const Item = ({title, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnText, rightBtnLink, twoButtons, first}) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`

        }}>
            <div className='item_container'>
                <div className='item_text'>
                    <p>{title}</p>
                    <div className='item_textDescription'>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='item_lowerThird'>
                    <div className='item_buttons'>
                        <Button imp ='primary' text={leftBtnTxt} link={leftBtnLink}></Button>

                        {
                            twoButtons && (
                                <Button imp='secondary' text={rightBtnText} link={rightBtnLink}></Button>
                            )
                        }
                    </div>
                    {first && (
                        <div className='item_expand'>
                            <ExpandMoreIcon></ExpandMoreIcon>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item
