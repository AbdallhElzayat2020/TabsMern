import Duties from "./Duties";
const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, title, duties } = jobs[currentItem];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-title">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
