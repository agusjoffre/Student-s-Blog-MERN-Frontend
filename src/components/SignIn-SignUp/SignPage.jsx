import './sign.css';
import LoginPage from './SignIn/LoginPage';
import RegisterPage from './SignUp/RegisterPage';

export default function SignPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100vh',
      paddingLeft: '20rem',
      paddingRight: '20rem',
    }}
    >
      <LoginPage />
      <RegisterPage />
    </div>
  );
}
