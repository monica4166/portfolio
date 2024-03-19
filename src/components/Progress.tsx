interface Props {
  skill: string;
  value: string;
}
function Progress({ skill, value }: Props) {
  return (
    <>
      <div className="contianer">
        <div className="row">
          <h2 className="fs-5 text col-sm">{skill}</h2>
          <p className="text-end col-sm">{value}</p>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: "100%" }}
        >
          <div
            className="progress-bar bg-success"
            style={{ width: value }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Progress;
