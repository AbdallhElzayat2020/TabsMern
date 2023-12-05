const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            type="button"
            onClick={() => setCurrentItem(index)}
            key={item.id}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
