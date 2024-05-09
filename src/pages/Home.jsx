const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://getwallpapers.com/wallpaper/full/f/2/8/119686.jpg)',
      }}
    >
      <div className="hero-overlay backdrop-blur-sm"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl">Welcome on board!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
