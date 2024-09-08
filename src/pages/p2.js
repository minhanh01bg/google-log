import { useState, useEffect } from 'react';
import {GoogleOAuthProvider, GoogleLogin } from 'react-google-login';
import Title from '../templates/Title'
import { useNavigate } from 'react-router-dom';
import { jwtDecode as jwt_decode } from 'jwt-decode';

const clientId = "309433046862-6sesqrs0cargc3uciancsr0hk1p1v40l.apps.googleusercontent.com";
function P2() {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    password: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  // When user unchecks "Remember me"
  
  useEffect(()=>{
    const email = localStorage.getItem('email');
    console.log(email)
    if(email === undefined){
      navigate('/');
    } else{
      setEmail(email);
    }
  },[])
  const handleSubmit = (e) => {
    console.log(email);
    console.log(formData.password);

  }
  const handleSuccess = (response) => {
    const user = response.profileObj;
    console.log(user);
  };
  const handleFailure = () => {
    console.log("Login thất bại");
  };
  return (
    <>
      <Title title='Login' />
      <div data-theme="mytheme" className='roboto h-screen flex flex-col place-content-center jusify-center bg-[#f0f4f9]'>
        {/* <form className="w-10/12 lg:w-10/12 bg-white max-w-5xl mx-auto rounded-box" onChange={handleChange} onSubmit={handleSubmit}>
          <div className='flex border-b px-4 items-center'>
            <svg xmlns="https://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 40 48" aria-hidden="true" jsname="jjf7Ff"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>
            <span className='px-4 color-base-300'>Đăng nhập bằng Google</span>
          </div>
          <div className='w-full flex jusify-center flex-col md:flex-row  mt-20 p-8'>
            <div className='mb-5 flex-1'>
              <div className='flex flex-col'>
                <span className='text-4xl leading-tight tracking-tight'>Chào mừng</span>
                <div className='mt-5 leading-tight tracking-tight flex items-center'>
                  <svg aria-hidden="true" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
                  <span className='ml-2'>
                    {email}
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-5 flex-1">
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="password" id='password' className="grow" placeholder="Email or phone" value={formData.password} onChange={handleChange} />
                </label>
              </div>
              
              <label className="flex items-center cursor-pointer mt-3">
                <input type="checkbox" className="checkbox checkbox-sm checkbox-primary rounded-none border-2" />
                <span className="ml-2 label-text">Hiện mật khẩu</span>
              </label>
            </div>
          </div>
          <div className='w-full mt-10 flex flex-row-reverse justify-between md:justify-start p-8'>
            <button type="submit" className="btn btn-primary rounded-full text-white no-animation">Tiếp theo</button>
            <button type="submit" className="btn border-none bg-white rounded-full text-primary no-animation hover:bg-transparent focus:bg-[#cddcf5]">Bạn quên mật khẩu?</button>
          </div>
        </form> */}
        {/* <div className='w-10/12 lg:w-10/12 flex justify-between max-w-5xl mx-auto mt-2'>
          <div>
            <button className='btn btn-sm bg-base-100 border-none shadow-none no-animation font-normal'><span className='text-xs'>Tiếng việt</span></button>
          </div>
          <div>
            <button className='btn btn-sm bg-base-100 border-none shadow-none no-animation font-normal mx-1'><span className='text-xs'>Trợ giúp</span></button>
            <button className='btn btn-sm bg-base-100 border-none shadow-none no-animation font-normal mx-1'><span className='text-xs'>Quyền riêng tư</span></button>
            <button className='btn btn-sm bg-base-100 border-none shadow-none no-animation font-normal mx-1'><span className='text-xs'>Tài khoản</span></button>
          </div>
        </div> */}
        {/* <GoogleOAuthProvider > */}
          <div>
            <GoogleLogin
              clientId={clientId}
              buttonText='Login'
              onSuccess={handleSuccess}
              onError={handleFailure}
              isSignedIn={true}
            />
          </div>
        {/* </GoogleOAuthProvider> */}
      </div>
    </>
  )
}

export default P2;