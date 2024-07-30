import axios from 'axios'
import './App.css'
import { useState } from 'react'
import { Text } from './Text';
import { UserCard } from './components/UserCard';
import { UserProfile } from './types/userProfile';
import { User } from './types/api/user';

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchData = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      }).catch(() => {
        setError(true);
      }).finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      
      <Text color="red" fontSize='18px' />
      <button onClick={onClickFetchData}>データ取得</button>
      <br />
      {error ? (
        <p>エラー</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </>
  )
}

export default App
