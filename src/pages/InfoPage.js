import React from 'react'
import styles from '../assets/style_modules/Info.module.css'

export default function InfoPage() {
  return (
    <div className={styles['pageInfo']}>
        
        

        

        <div className={styles['iframeWrapper']}>

            <div className={styles['infoLinks']}>
                <div>Visit our New Location.</div><br/>
                <a href='https://www.google.com/maps/place/The+Crocodile/@47.614771,-122.349278,15z/data=!4m5!3m4!1s0x0:0x7f05096376241171!8m2!3d47.6147713!4d-122.3492776?hl=en'>2505 1st AveSeattle, WA 98121</a>
            </div><br/>

            <iframe
                className={styles['iframe']}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5379.141809121735!2d-122.34931038867094!3d47.615032710318225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f05096376241171!2sThe%20Crocodile!5e0!3m2!1sen!2sus!4v1655786942063!5m2!1sen!2sus"
                frameBorder="0"
                style={{ border: 0}} 
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                />

        </div>
        
        

    </div>
  )
}
