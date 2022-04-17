import React from 'react';
import './formInput.css';



const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className="form mb-4">
        <input 
        className='form__input focus:outline-none focus:ring-1 focus:ring-indigo-500'
        onChange={handleChange}
        placeholder=" "
        {...otherProps}        
         />
         {
             label ? 
            ( <label 
                className={`form__label`}>
                    {label}
                </label>
            )
             :
             null
         }
    </div>
)

export default FormInput;