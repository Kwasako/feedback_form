import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

  const FeedbackForm = () => {
    const [formData, setFormData] = useState({
      name:"",
      email: "",
      feedback:"",
      rating: "",
      isSignUp: true
    })
  const handleChange = (event)=>{
    const {value, name, type, checked} = event.target
    setFormData({
      ...formData,
      [name]: type=="checkbox"? checked:value
    })
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    const hasSignUP = formData.isSignUp? "Yes":"No"
    const confirmation_message = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      SignUp_Newsletter: ${hasSignUP}
      Rating: ${formData.rating}
    `
    const isConfirmed = window.confirm(`Please confirm your details: \n\ ${confirmation_message}`)
    if (isConfirmed){
      console.log('is submitting data:', formData)
      setFormData({
        name:'',
        email: '',
        feedback: '',
        rating: '',
        isSignUp: true
      })
    alert('Thank you for your valuable feedback!')
    }
  }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type='text'
          name='name'
          placeholder='your name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='your email'
          value={formData.email}
          onChange={handleChange}
          />
        <textarea
          name='feedback'
          placeholder='your feedback'
          value={formData.feedback}
          onChange={handleChange}
          >   
        </textarea>
        <input 
                type="checkbox" 
                id="isSignUp" 
                checked={formData.isSignUp}
                onChange={handleChange}
                name="isSignUp"
            />
        <label htmlFor="isSignUp"> SignUp for Newsletter </label>
        <br />
        <br />
        <fieldset>
          <legend> <strong>Rate Us</strong> </legend>
          <input
            type='radio'
            name='rating'
            id='one'
            value='one'
            checked = {formData.rating === "one"}
            onChange={handleChange}
          />
          <label htmlFor='one'> 1 </label>
          <br />
          <input
            type='radio'
            name='rating'
            id='two'
            value='two'
            checked = {formData.rating === "two"}
            onChange={handleChange}
          />
          <label htmlFor='two'> 2 </label>
          <br />
          <input
            type='radio'
            name='rating'
            id='three'
            value='three'
            checked = {formData.rating === "three"}
            onChange={handleChange}
          />
          <label htmlFor='three'> 3 </label>
          <br />
          <input
            type='radio'
            name='rating'
            id='four'
            value='four'
            checked = {formData.rating === "four"}
            onChange={handleChange}
          />
          <label htmlFor='four'> 4 </label>
          <br />
          <input
            type='radio'
            name='rating'
            id='five'
            value='five'
            checked = {formData.rating === "five"}
            onChange={handleChange}
          />
          <label htmlFor='five'> 5 </label>
          <br />
        </fieldset>
        <br />
        <br />
        <button type='submit'> Submit Feedback</button>
        
        
      </form>
    </>
  );
};

export default FeedbackForm;
