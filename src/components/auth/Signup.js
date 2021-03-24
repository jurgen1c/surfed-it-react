const Signup = () => {
  const handleChange = () => {

  };

  const handleSubmit = () => {

  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="username" onChange={handleChange} />
      <input type="email" name="email" onChange={handleChange} />
      <input type="textarea" name="bio" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <input type="password" name="confirmPassword" onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
