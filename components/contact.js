import React, { useEffect } from 'react'

const contact = () => {
  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw234eavqkgyvFEnrWfEThCeDSRireTWIAzPx1f7nZ-tqyC5uSv-tQYNOWdFEh6FXLi/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg=document.getElementById("msg")

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
        console.log('Success!', response);
        response
          .json()
          .then((data) => {
            console.log('Response data:', data);
            // Further processing based on the data
            msg.innerHTML = 'Thank You For Subscribing';
            setTimeout(function () {
              msg.innerHTML = '';
            }, 5000);
          })
          .catch((error) => {
            console.error('Error in response!', error);
          });
      } catch (error) {
        console.error('Error!', error.message);
      }
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup event listener when the component unmounts
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);






  const footerStyle = {
    padding: '20px 0',
    backgroundColor: 'black',
    zIndex: '100',
    position : 'relative',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
  };

  const socialIconStyle = {
    marginRight: '50px',
    fontSize: '24px',
    color: 'white',
  };

  const socialIconsContainer = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
    paddingBottom:'25px',
    
  };
  const formStyle = {
    backgroundColor:'white',
    display:'flex',
    width: 'fit-content',
    alignItems: 'center',
    margin: 'auto',
    

  };
  const inputStyle ={
    border:'0',
    outline:'none',
    padding:'10px 20px',
    height:'40px',
    width:'400px',
    fontSize:'16px',
  }
  const buttonStyle ={
    background:'#49108B',
    border:'none',
    outline:'none',
    height:'40px',
    width:'80px',
    cursor:'pointer',
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
  }
  const spanStyles={
    color:'#E26EE5',
    marginTop:'10px',
    display:'block',

  }
  

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    color:'white',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const copyrightStyle = {
    fontSize: '12px',
    marginTop: '20px',
    color: 'white',
  };
  return (
    <footer style={footerStyle}>
      <div className="text-center">
        <h3 style={headingStyle}>CONTACT US</h3>
        <div style={socialIconsContainer} className="social-icons">
          <div className="facebook"><a href="#"><i style={socialIconStyle} className="fab fa-facebook-f"></i></a></div>
          <div className="linkedin"><a href="#"><i style={socialIconStyle} className="fab fa-linkedin-in"></i></a></div>
          <div className="twitter"><a href="#"><i style={socialIconStyle} className="fab fa-twitter"></i></a></div>
          <div className="instagram"><a href="#"><i style={socialIconStyle} className="fab fa-instagram"></i></a></div>
        </div>
      </div>
      <div className="text-center">
        
        <form action="" style={formStyle} name="submit-to-google-sheet" className="justify-content-center align-items-center">
          
          <input type="email" name="email" className="form-control" style={inputStyle} placeholder="Enter your email to subscribe" />
          <button type="submit"  className="btn btn-primary ml-2" style={buttonStyle}><img src="/images/send-icon.png" width="30px"/></button>
          
        </form>
        <span id="msg" style={spanStyles}></span>
      </div>
      <div className="text-center">
        <div className="row" style={{ display: 'flex',justifyContent: 'space-around' }}>
          <div className="col-md-6 col-sm-12 mb-2">
            <ul style={listStyle} className="list-unstyled">
              <li style={listItemStyle}>Name : </li>
              <li style={listItemStyle}>Email : </li>
              <li style={listItemStyle}>Mob : </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <ul style={listStyle} className="list-unstyled">
              <li style={listItemStyle}>Name :</li>
              <li style={listItemStyle}>Email :</li>
              <li style={listItemStyle}>Mob :</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p style={copyrightStyle}>Made by AstroCET. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default contact;





    



