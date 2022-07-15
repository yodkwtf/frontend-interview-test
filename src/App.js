import { useEffect } from 'react';
import { Loader, UserCard, Footer } from './components';
import { getAllUsers, getSingleUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { data: allUsers, user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <main>
        <header>
          {loading ? (
            <Loader />
          ) : user ? (
            <UserCard user={user} />
          ) : (
            <h2>Please click a button to see that user :)</h2>
          )}
        </header>

        <section>
          {allUsers?.map((item) => (
            <button
              key={item.id}
              onClick={() => dispatch(getSingleUser(item.id))}
            >
              {item.id}
            </button>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
