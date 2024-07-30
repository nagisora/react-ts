import './App.css'
import { Text } from './Text';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchData = () => getUsers();
  
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
