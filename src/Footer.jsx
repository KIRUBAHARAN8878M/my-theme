import React from 'react';


function Footer() {
  return (
    <div className='mt-5'>
    <div className='text-center pb-3 mynav ' style={{height:'5rem'}}>
    <div className="text-center pt-2 " id="social-cont">
    <a target="_blank" href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=kirubaharan8878m@gmail.com"><i class="fa-regular fa-envelope"></i></a>
            <a target="_blank" href="https://github.com/KIRUBAHARAN8878M"><i class="fa-brands fa-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/kirubaharan-m-116b36234"><i class="fa-brands fa-linkedin"></i></a>
            {/* <a target="_blank" href="https://wa.me/+918489671064"><i class="fa-brands fa-whatsapp"></i></a> */}
            <a  href="https://drive.google.com/file/d/1v5v_d0fwQqt6dCKV8yIKseh05h5H_2ye/view" target="_blank" download><i class="fas fa-download"></i></a>
          </div>
         
          <div className="text-center myname"> 
    @2022 Designed by Kirubaharan M
    </div>
    </div>
    
    </div>
  )
}

export default Footer
