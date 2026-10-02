import Button from "./Button";

function Header() {
  return <header>
    <h3>Logo</h3>

    <nav>
      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Services</a>
    </nav>

    <div>
      <Button title='Login' />
      <Button title='Register' />
    </div>

    {/* title is a prop(s) */}
    {/* <button>Login</button> */}
  </header>
}

export default Header;