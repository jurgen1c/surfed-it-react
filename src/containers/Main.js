/* eslint-disable */
import { withRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import * as api from '../utils/api';

const Main = ({ user }) => {
  const mockData = [
    { name: 'Location Name', sessions: ['Session 1', 'Session 2'] },
    { name: 'Location2 Name', sessions: ['Session 1', 'Session 2'] },
    { name: 'Location3 Name', sessions: ['Session 1', 'Session 2'] },
    { name: 'Location4 Name', sessions: ['Session 1', 'Session 2'] },
  ];
  const getLocations = async () => {
    const session = {
      jwt: user.jwt,
      aud: user.aud,
    }
    const locations = await api.get(
      'http://localhost:3000',
      'api/v1/locations',
      {},
      session,
    );
    return locations;
  };

  return (
    <div>
      <div>
        <h2>
          All locations will be displayed here
        </h2>
        <div>
          {mockData.map(item => (
            <div>
              <h5>{item.name}</h5>
              <p>{item.sessions}</p>
            </div>
          ))}
        </div>
        <div>
          {user && getLocations.map(loc => <div>{JSON.stringify(loc)}</div>)}
        </div>
      </div>
      <Navbar user={user} />
    </div>
  );
};

export default withRouter(Main);
