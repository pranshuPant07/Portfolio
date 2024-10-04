import React from 'react'
import '../Style/Form.css'

function Form() {
    return (
        <div className='formDiv'>
            <div className='formArea'>
                <div className='forPhoto'>
                    <h1 className="pulse">CONTACT US</h1>
                </div>
                <div className='forForm'>
                    <div className='formm'>
                        <form>
                            <input className='inputSpace' placeholder='Name' /> <br /><br />
                            <input className='inputSpace' placeholder='Email' /> <br /><br />
                            <textarea onResize="none" rows="10" cols="36">Write your message</textarea> <br />
                            <button className='btn-submit' type='submit'>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form
