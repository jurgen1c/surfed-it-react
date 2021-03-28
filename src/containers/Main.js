import Navbar from '../components/navbar/Navbar';

const Main = () => {
  /* const { token, setToken } = useToken();
  console.log(token);

  if (!token || token.token == null) {
    return <Login setToken={setToken} />;
  } */
  const mockData = [
    {name: 'Location Name', sessions: ['Session 1', 'Session 2']},
    {name: 'Location2 Name', sessions: ['Session 1', 'Session 2']},
    {name: 'Location3 Name', sessions: ['Session 1', 'Session 2']},
    {name: 'Location4 Name', sessions: ['Session 1', 'Session 2']},
  ];

  return (
    <div>
      <div>
        <h2>
          All locations will be displayed here
        </h2>
        <div>
          {mockData.forEach(item => {
            return (
              <div>
                <h5>{item.name}</h5>
                <p>{item.sessions}</p>
              </div>
            )
          })}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Main;
