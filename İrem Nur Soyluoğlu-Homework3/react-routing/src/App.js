function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: "purple", minHeight: "100vh", color: "white" }}
    >
      <header>
        <Navbar />
      </header>
      <div>
        <h1>Welcome!</h1>
        <button onClick={toggleForm}>
          {showForm ? "Hide Form" : "Add User"}
        </button>
        {showForm && <Userform />}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer>2024</footer>
    </div>
  );
}
