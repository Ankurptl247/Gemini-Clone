import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)

  return (
    <>
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className='main-container'>

            {!showResult ? 
            <> 
            <div className='greet'>
                <p><span>Hello, Ankur.</span></p>
                <p>How Can I Help you today?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>Suggest butiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className='card'>
                    <p>best place in India</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className='card'>
                    <p>Suggest butiful places to see on an upcoming road trip</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className='card'>
                    <p>Suggest butiful places to see on an upcoming road trip</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :  <div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p> 
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div> 
            </div>
            }

        
            <div className='main-bottom'>
                <div className='search-box'>

                    <input onChange={(e) =>setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt here' />

                    <div className='search-box-icon'>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                Humans review some saved chats to improve Google AI. To stop this for future chats, turn off Gemini Apps activity.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main
