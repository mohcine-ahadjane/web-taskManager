function Login() {
  return (
    <div>
      <h2>Login</h2>
      <a href="http://localhost:8080/oauth2/authorization/google">Login with Google</a>
      <br />
      <a href="http://localhost:8080/oauth2/authorization/github">Login with GitHub</a>
    </div>
  );
}

export default Login;
