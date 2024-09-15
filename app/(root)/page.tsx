import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {

  const loggedIn= {firstName: 'Anuj', lastName: 'Agnihotri' ,email:"ag@pro"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Accsess and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2150.6}
          />
        </header>
      recent

      </div>
      
      <RightSidebar 
        user={loggedIn}
        transctions={[]}
        banks={[{currentBalance: 123456, name: "SBI"}, {currentBalance: 123456, name: "SBI"}]}
      />
      
    </section>
  );
}

export default Home